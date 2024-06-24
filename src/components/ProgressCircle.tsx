import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { tokens } from "../theme";


interface ProgressCircleProps {
  progress?: number;
  size?: number;
  subtitle?: string;
}

const ProgressCircle: FC<ProgressCircleProps> = ({ progress = 0.75, size = 40, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '50%',
        width: { xs: '50vw', sm: '20vw', md: '9vw', lg: `${size}px` }, 
        height: { xs: '50vw', sm: '40vw', md: '9vw', lg: `${size}px` },
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="bold"
          fontSize={size * .21}
        >
          {`${Math.round(progress * 100)}%`}
        </Typography>
        {subtitle && (
          <Typography
            variant="caption" 
            fontSize={size * .1}
            sx={{
              textAlign: 'center',
              color: theme.palette.text.secondary, 
              marginTop: theme.spacing(1), 
              maxWidth: '90%', 
              wordWrap: 'break-word', 
              whiteSpace: 'pre-wrap', 
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProgressCircle;
