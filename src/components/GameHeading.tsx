import type { GameQuary } from '@/App';
import { Heading } from '@chakra-ui/react';

interface Props {
    gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
    const heading = `${gameQuary.platform?.name || ''} ${gameQuary.genre?.name || ''} Games`;

    return <Heading paddingLeft={2} marginBottom={2} as="h1" size="3xl">{heading}</Heading>;
};

export default GameHeading;
