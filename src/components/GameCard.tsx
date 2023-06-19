import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Game } from '../hooks/UseGames';
import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';
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
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
