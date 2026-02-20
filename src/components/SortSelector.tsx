import { Button, Menu, Portal } from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react';

interface Props {
    onSelectSortOrder: (order: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortArray = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-release', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const currentSortOrder = sortArray.find((item) => item.value === sortOrder);

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    Order by: {currentSortOrder?.label || 'Relevance'}
                    <ChevronDown></ChevronDown>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortArray.map((item) => (
                            <Menu.Item
                                key={item.value}
                                value={item.value}
                                onClick={() => onSelectSortOrder(item.value)}
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
