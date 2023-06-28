import { Box, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem: FC<DefinitionItemProps> = ({ term, children }) => {
  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.600">
          {term}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default DefinitionItem;
