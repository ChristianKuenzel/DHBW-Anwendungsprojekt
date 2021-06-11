/*Sophie Strittmatter */

import { Input, Box, HStack, Center, StackDivider } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

/* Komponente der Suchleiste mit Hilfe Chakra-UI und einem Suchlupen-Icon von react-icons nach Mockup gestaltet und erstellt */
export default function Searchbar() {
    return (
        <Box borderWidth="1px" borderRadius="lg" maxWidth="200px" borderColor={"#5F6971"}>
            <HStack
            divider={<StackDivider borderColor={"#5F6971"} />}
            >
                <Center marginLeft={2}>
                    <GoSearch />
                </Center>
                <Input variant="unstyled" placeholder="Suchen..."/>
            </HStack>
        </Box>
    );
}
