import type { Game } from '@/hooks/useGames';
import {  CardBody, CardRoot, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <CardRoot borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="xl">{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
            </CardBody>
        </CardRoot>
    );
};

export default GameCard;
