import type { Platform } from '@/hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import {
    FaWindows,
    FaLinux,
    FaAndroid,
    FaXbox,
    FaApple,
    FaPlaystation,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const icopnMap = { // based on slug
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    };
    return (
        <HStack marginY={"10px"}>
            {platforms.map((platform) => (
                <Icon as={icopnMap[platform.slug]} color="gray.500"></Icon>
            ))}
        </HStack>
    );
};

export default PlatformIconList;
