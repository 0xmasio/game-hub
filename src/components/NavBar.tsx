import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/shizzel.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearchInput: (searchText: string) => void;
}

const NavBar = ({ onSearchInput }: Props) => {
    return (
        <HStack justifyContent="space-between" padding="20px">
            <Image src={logo} boxSize="60px"></Image>
            <SearchInput onSearchInput={onSearchInput}></SearchInput>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
