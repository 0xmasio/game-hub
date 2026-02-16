import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner, Text } from '@chakra-ui/react';

interface Props{
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>;

    return (
        <List.Root listStyleType="none">
            {data.map((genre) => (
                <List.Item key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="32px"
                            borderRadius={8}
                        ></Image>
                        <Button fontSize="lg" variant="ghost" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GenreList;
