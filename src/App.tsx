import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuary {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {
    const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);

    return (
        <>
            {/* <ColorModeButton></ColorModeButton> */}
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr',
                }}
            >
                <GridItem area="nav">
                    <NavBar></NavBar>
                </GridItem>
                <GridItem
                    area="aside"
                    display={{ base: 'none', lg: 'block' }}
                    paddingX={5}
                >
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuary({ ...gameQuary, genre })
                        }
                        selectedGenre={gameQuary.genre}
                    ></GenreList>
                </GridItem>
                <GridItem area="main">
                    <HStack spaceX={4} paddingLeft={2} marginBottom={5}>
                        <PlatformSelector
                            selectedPlatform={gameQuary.platform}
                            onSelectPlatform={(platform) =>
                                setGameQuary({ ...gameQuary, platform })
                            }
                        ></PlatformSelector>
                        <SortSelector sortOrder={gameQuary.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuary({...gameQuary, sortOrder})}></SortSelector>
                    </HStack>
                    <GameGrid gameQuary={gameQuary} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
