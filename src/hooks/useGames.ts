import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react';

interface GameType {
    id: number;
    name: string;
}

interface GameResponseType {
    count: number;
    results: GameType[];
}

const useGames = () => {
    const [games, setGames] = useState<GameType[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<GameResponseType>('games', { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => controller.abort();
    }, []);

    return { games, error };
};

export default useGames;
