import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer: FC<GameCardContainerProps> = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
