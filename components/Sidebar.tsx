import {
    Divider, Heading,
    HStack,
    Input,
    InputGroup, Link,
    Stack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link";
import { useRouter } from 'next/router';

function Sidebar() {
    const router = useRouter();
    function isActive(path){
        return router.pathname === path;
    }
    return (
        <Stack w='250px' bg='white' h='100vh'>
            <Stack py='23px' px='20px' spacing={'39px'}>
                <HStack justify={'space-between'}>
                    <Heading cursor={"pointer"} fontFamily={"cursive"} fontWeight={"600"} fontSize={'24px'}>Track My Project </Heading>
                </HStack>
                <Stack>
                    <InputGroup bg='#00000008' borderRadius={'8px'}>
                        <Input type='search' placeholder='Search' _placeholder={{color: "#0000004D"}}/>
                    </InputGroup>
                    <Divider/>
                </Stack>
                <Stack>
                    <NextLink href='/' passHref>
                        <Link
                            color={isActive('/') ? '#5031c2' : '#000000'}
                            bg={isActive('/') ? '#EDF2F7' : ''}
                            _hover={!isActive('/') ? {bg: '#dadada'} : {}}
                            p={"10px"}
                            borderRadius={"10px"}
                            textAlign={"center"}> Home
                        </Link>
                    </NextLink>
                    <NextLink href='/projects' passHref>
                        <Link
                            borderLeft={"1px solid gray.600"}
                            color={isActive('/projects') ? '#5031c2' : '#000000'}
                            bg={isActive('/projects') ? '#EDF2F7' : ''}
                            _hover={!isActive('/projects') ? {bg: '#dadada'} : {}}
                            p={"10px"}
                            borderRadius={"10px"}
                            textAlign={"center"}>
                            Projects
                        </Link>
                    </NextLink>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default Sidebar;