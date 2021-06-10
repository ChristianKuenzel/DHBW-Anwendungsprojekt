import { Flex } from '@chakra-ui/react';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Flex direction="column" padding="8">
                {children}
            </Flex>
        </>
    );
};

export default Layout;