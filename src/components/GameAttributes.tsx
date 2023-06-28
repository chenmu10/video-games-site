import { SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Game from '../Entities/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface GameAttributesProps {
  game: Game;
}

const GameAttributes: FC<GameAttributesProps> = ({
  game,
}) => {
  return (
    <>
      <SimpleGrid as="dl" marginY="20px" columns={2}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
