import type { Game } from '@/hooks/useGames';
import {
    CardBody,
    CardRoot,
    Heading,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import Emoji from './Emoji';

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <CardRoot width="100%" borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    ></PlatformIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize="xl">
                    {game.name}
                    <Emoji rating={game.rating_top}></Emoji>
                </Heading>
            </CardBody>
        </CardRoot>
    );
};

export default GameCard;
