import { Input, Box, HStack, Center, StackDivider } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';


export default function Searchbar() {
    return (
        <Box borderWidth="1px" borderRadius="lg" maxWidth="200px">
            <HStack
            divider={<StackDivider borderColor="gray.200" />}
            >
                <Center>
                    <GoSearch />
                </Center>
                <Input variant="unstyled" placeholder="Suchen..."/>
            </HStack>
        </Box>
    );
}
