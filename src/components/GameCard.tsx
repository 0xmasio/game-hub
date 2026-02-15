import type { Game } from '@/hooks/useGames';
import {  CardBody, CardRoot, Heading, Image } from '@chakra-ui/react';

interface Props {
    game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
        <CardRoot borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="xl">{game.name}</Heading>
            </CardBody>
        </CardRoot>
    );
};

export default GameCard;
