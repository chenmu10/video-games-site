import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/UsePlatforms';
import { Genre } from './hooks/useGenres';
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(newGenre) =>
              setGameQuery({ ...gameQuery, genre: newGenre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectedPlatform={(newPlatform) =>
                setGameQuery({ ...gameQuery, platform: newPlatform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(newOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: newOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
