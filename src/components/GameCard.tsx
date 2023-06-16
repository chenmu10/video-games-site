import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Game } from '../hooks/UseGames';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
import { getCroppedImageUrl } from '../services/image-url';
interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
