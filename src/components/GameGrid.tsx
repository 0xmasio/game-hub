import useGames from '@/hooks/useGames';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                gap={20}
                padding="10px"
                columnGap={3}
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
