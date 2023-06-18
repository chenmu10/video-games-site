import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { FC } from 'react';
import useGenres, { Genre } from '../hooks/useGenres';

interface GenreListProps {
  onSelectGenre: (genre: Genre)=>void;
}

const GenreList: FC<GenreListProps> = ({onSelectGenre}) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      <List>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button variant="link" onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
