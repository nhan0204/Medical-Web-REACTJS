import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";
import { FC, useCallback, useState } from "react";

import { Connection } from "@metaplex/js";

let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9";

const SolanaWallet: FC = () => {
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
    <div className="solanaWallet">
      <WalletMultiButton />
    </div>
  );
};

export default SolanaWallet;