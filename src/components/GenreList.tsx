import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    Spinner,
    Text,
} from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>;

    return (
        <>
            <Heading fontSize="xl" marginBottom={3}>
                Genres
            </Heading>
            <List.Root listStyleType="none">
                {data.map((genre) => (
                    <List.Item key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="32px"
                                borderRadius={8}
                            ></Image>
                            <Button
                                whiteSpace="normal"
                                height="auto"
                                textAlign="left"
                                fontSize="lg"
                                variant="ghost"
                                width="100%"
                                justifyContent="flex-start"
                                onClick={() => onSelectGenre(genre)}
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                _hover={{
                                    textDecoration: 'underline',
                                    bg: 'transparent', // اگر می‌خواهید پس‌زمینه خاکستری دکمه حذف شود
                                }}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    );
};

export default GenreList;
