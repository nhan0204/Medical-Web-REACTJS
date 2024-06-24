import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode; // Ensure icon is passed as JSX
}

const StatBox: React.FC<StatBoxProps> = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[300];

  return (
    <Box display="flex" alignItems="stretch" justifyContent="space-around" marginRight="auto" gap="1rem">
        {icon} {/* Render the icon as JSX */}
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight="bold" fontSize="0.9rem" sx={{ color: colors }}>
            {title}
          </Typography>
          <Typography variant="body2" fontSize="0.8rem" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Box>
  );
};

export default StatBox;
