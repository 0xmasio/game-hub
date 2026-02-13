import { HStack, Switch } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            {/* <Button
                size="xl"
                onClick={() =>
                    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
                }
                // onClick={toggleColorMode}
            >
                Toggle Mode
            </Button> */}

            <Switch.Root onCheckedChange={toggleColorMode} colorPalette="cyan" size="md">
                <Switch.HiddenInput />
                <Switch.Control />
                <Switch.Label >{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Switch.Label>
            </Switch.Root>
        </HStack>
    );
};

export default ColorModeSwitch;
