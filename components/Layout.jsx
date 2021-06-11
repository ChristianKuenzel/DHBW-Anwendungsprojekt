import { Flex } from '@chakra-ui/react';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            /* Weiteres Flex muss außen sein mit "row" damit der Content neben der Navigationsleiste angezeigt wird, und nicht darunter*/
            <Flex direction="row">
                <Nav />
                <Flex direction="column" padding="8">
                    {children}
                </Flex>
            </Flex>
        </>
    );
};

export default Layout;
