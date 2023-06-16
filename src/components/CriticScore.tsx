import { Badge } from '@chakra-ui/react';
import { FC } from 'react';

interface CriticScoreProps {
  score: number;
}

const CriticScore: FC<CriticScoreProps> = ({ score }) => {
  const color = score > 80 ? 'green' : score > 70 ? 'yellow' : 'red';

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
