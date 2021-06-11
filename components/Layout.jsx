import { Flex } from '@chakra-ui/react';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
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