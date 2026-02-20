import type { GameQuary } from '@/App';
import useData from './useData';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (
    gameQuary : GameQuary
) =>
    useData<Game>(
        'games',
        {
            params: { // parameter object that we send to server (quary parameters)
                genres: gameQuary.genre?.id,
                platforms: gameQuary.platform?.id,
                ordering: gameQuary.sortOrder
            },
        },
        [gameQuary], // any time this object changes we need to refetch the data (dependency list)
    );

export default useGames;
