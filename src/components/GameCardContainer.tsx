import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer: FC<GameCardContainerProps> = ({ children }) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
      borderRadius={10}
      overflow="hidden"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
