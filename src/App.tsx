import {
  WalletAdapterNetwork,
  WalletNotConnectedError,
} from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import {
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "../src/css/bootstrap.css";

import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";
import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import { Connection } from "@metaplex/js";

require("./App.css");
require("@solana/wallet-adapter-react-ui/styles.css");
let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9";
function getWallet() {}
const App: FC = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};

export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new LedgerWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolletExtensionWalletAdapter(),
      new SolletWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content: FC = () => {
  let [lamports, setLamports] = useState(0.1);
  let [wallet, setWallet] = useState(
    "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9"
  );

  // const { connection } = useConnection();
  const connection = new Connection(clusterApiUrl("devnet"));
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal) => {
      console.log(bal / LAMPORTS_PER_SOL);
    });

    let lamportsI = LAMPORTS_PER_SOL * lamports;
    console.log(publicKey.toBase58());
    console.log("lamports sending: {}", thelamports);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(theWallet),
        lamports: lamportsI,
      })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, "processed");
  }, [publicKey, sendTransaction, connection]);

  function setTheLamports(e: any) {
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
    lamports = e.target.value;
    thelamports = lamports;
  }
  function setTheWallet(e: any) {
    setWallet(e.target.value);
    theWallet = e.target.value;
  }
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};
