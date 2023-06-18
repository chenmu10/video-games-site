import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Game } from '../hooks/UseGames';
import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
