import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const score_color: string = score > 90 ? 'green' : 'yellow';
    return (
        <Badge
            fontSize="14px"
            paddingX={2}
            colorPalette={score_color}
            variant={'subtle'}
            borderRadius="4px"
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
