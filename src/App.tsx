import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
    return (
        <>
            {/* <ColorModeButton></ColorModeButton> */}
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area="nav">
                    <NavBar></NavBar>
                </GridItem>
                <GridItem area="aside" display={{ base: 'none', lg: 'block' }}>
                    <GenreList></GenreList>
                </GridItem>
                <GridItem area="main">
                    <GameGrid/>
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
