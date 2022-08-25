import {HStack, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
function Layout(props) {
    return (
        <HStack align={'flex-start'} justifyContent={"space-between"} spacing={0}>
            <Sidebar/>
            <Stack w="calc(100% - 200px)" boxSizing='border-box' spacing={0}>
                <Header title={"Dashboard"}/>
                <Stack p='30px' bg='#E5E5E5' h='100vh'>
                    {props.children}
                </Stack>
            </Stack>
        </HStack>
    );
}
export default Layout;