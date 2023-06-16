import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import { FC } from 'react';

interface GameCardSkeletonProps {}

const GameCardSkeleton: FC<GameCardSkeletonProps> = ({}) => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
