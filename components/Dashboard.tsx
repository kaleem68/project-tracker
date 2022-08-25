import {HStack, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
function Dashboard() {
    return (
        <HStack align={'flex-start'} justifyContent={"space-between"} spacing={0}>
            <Sidebar/>
            <Stack w="calc(100% - 200px)" boxSizing='border-box' spacing={0}>
                <Header title={"Dashboard"}/>
                <Stack p='30px' bg='#E5E5E5' h='100vh'>
                    <SimpleGrid columns={3} gap='30px' bg='#E5E5E5' justify={'space-between'}>
                        <Stack py="10px" px='25px' align={'center'} border={'1px solid #0000000D'}
                               boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' borderRadius='8px' bg={'#5031c2'} h='80px'>
                            <Text fontSize={'14px'} fontWeight='700' color='white'>Projects Created</Text>
                            <Text fontSize={'24px'} fontWeight='700' color='white'>5</Text>
                        </Stack>
                        <Stack py="10px" px='25px' align={'center'} border={'1px solid #0000000D'}
                               boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' borderRadius='8px' bg={'#5031c2'} h='80px'>
                            <Text fontSize={'14px'} fontWeight='700' color='white'>Projects Aborted</Text>
                            <Text fontSize={'24px'} fontWeight='700' color='white'>12</Text>
                        </Stack>
                        <Stack py="10px" px='25px' align={'center'} border={'1px solid #0000000D'}
                               boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' borderRadius='8px' bg={'#5031c2'} h='80px'>
                            <Text fontSize={'14px'} fontWeight='700' color='white'>Projects Budget</Text>
                            <Text fontSize={'24px'} fontWeight='700' color='white'>£95k</Text>
                        </Stack>
                    </SimpleGrid>
                </Stack>
            </Stack>
        </HStack>
    );
}
export default Dashboard;