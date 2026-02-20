import { Field, Input, InputGroup } from '@chakra-ui/react';
import { Form } from 'lucide-react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearchInput: (searchText: string) => void;
}
const SearchInput = ({onSearchInput} : Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            style={{ width: '100%', margin: '10px' }}
            onSubmit={(event) => {
                event.preventDefault();
                onSearchInput(inputRef.current?.value);
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input
                    ref={inputRef}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="subtle"
                    paddingX={5}
                ></Input>
            </InputGroup>
        </form>
    );
};

export default SearchInput;
