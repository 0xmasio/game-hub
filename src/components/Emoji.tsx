import bullsEye from '../assets/icons8-bullseye-50.png';
import thumbsUp from '../assets/icons8-thumbs-up-100.png';
import meh from '../assets/icons8-meh-48.png';
import { Image, type ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh' },
        4: { src: thumbsUp, alt: 'recommended' },
        5: { src: bullsEye, alt: 'exceptional' },
    };

    return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1}></Image>;
};

export default Emoji;
