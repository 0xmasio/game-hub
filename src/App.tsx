import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import { Button } from '@chakra-ui/react';
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode';

function App() {


    return (
        <>

            
            <ColorModeButton></ColorModeButton>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area="nav">
                    <NavBar></NavBar>
                </GridItem>
                <GridItem
                    area="aside"
                    display={{ base: 'none', lg: 'block' }}
                >
                    Aside
                </GridItem>
                <GridItem area="main" >
                    Main
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
