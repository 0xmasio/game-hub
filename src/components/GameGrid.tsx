import useGames, { type Platform } from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { GameQuary } from '@/App';

interface Props {
    gameQuary: GameQuary;
}

const GameGrid = ({ gameQuary }: Props) => {
    const { data, error, isLoading } = useGames(gameQuary);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                gap={20}
                padding="10px"
                columnGap={6}
                rowGap={3}
            >
                {isLoading &&
                    skeletons.map((s) => (
                        <GameCardSkeleton key={s}></GameCardSkeleton>
                    ))}
                {data.map((game) => {
                    return <GameCard key={game.id} game={game}></GameCard>;
                })}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
