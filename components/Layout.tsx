import {HStack, Stack} from '@chakra-ui/react';
import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import {useRouter} from "next/router";
function Layout(props) {
    const router = useRouter();
    function getTitle(){
        if(router.pathname === '/')
            return 'Home';
        let paths = router.pathname.replace('/', '');
        return paths.charAt(0).toUpperCase() + paths.slice(1);
    }
    return (
        <HStack align={'flex-start'} justifyContent={"space-between"} spacing={0}>
            <Sidebar/>
            <Stack w="calc(100% - 200px)" boxSizing='border-box' spacing={0}>
                <Header title={getTitle()}/>
                <Stack p='30px' bg='#E5E5E5' h='100vh'>
                    {props.children}
                </Stack>
            </Stack>
        </HStack>
    );
}
export default Layout;