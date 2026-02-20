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
    const icopnMap = {
        // based on slug
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };
    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform) => {
                const IconComponent = icopnMap[platform.slug];

                // اگر اسلاگ پلتفرم (مثل sega) در نقشه ما نبود، چیزی رندر نکن
                if (!IconComponent) return null;

                return (
                    <Icon key={platform.id} color="gray.500" asChild>
                        <IconComponent />
                    </Icon>
                );
            })}
        </HStack>
    );
};

export default PlatformIconList;
