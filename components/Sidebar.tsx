import {
    Divider, Heading,
    HStack,
    Link,
    Stack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import {AiOutlineHome} from "react-icons/Ai";
import {Icon} from "@chakra-ui/icons";
import {VscFiles} from "react-icons/vsc";
import {MdOutlineCreateNewFolder, MdDoneOutline} from "react-icons/md";
import {GrInProgress} from "react-icons/gr";
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
                <Divider/>
                <Stack>
                    <NextLink href='/' passHref>
                        <Link
                            color={isActive('/') ? '#5031c2' : '#000000'}
                            bg={isActive('/') ? '#EDF2F7' : ''}
                            _hover={!isActive('/') ? {bg: '#dadada'} : {}}
                            p={"10px"}
                            textAlign={'center'}
                            borderRadius={"10px"}>
                            <Icon mb={"-2px"} mr={"3px"} w={6} h={5} as={AiOutlineHome}/>
                            Home
                        </Link>
                    </NextLink>
                    <NextLink href='/projects/new' passHref>
                        <Link
                            borderLeft={"1px solid gray.600"}
                            _hover={!isActive('/projects') ? {bg: '#dadada'} : {}}
                            p={"10px"}
                            borderRadius={"10px"}
                            textAlign={"center"}>
                            <Icon mb={"-2px"} mr={"3px"} w={5} h={4} as={VscFiles}/>
                            Projects
                        </Link>
                    </NextLink>
                    <>
                        <NextLink href='/projects/new' passHref>
                            <Link
                                alignSelf={"flex-end"}
                                w={"90%"}
                                borderLeft={"1px solid gray.600"}
                                color={isActive('/projects/new') ? '#5031c2' : '#000000'}
                                bg={isActive('/projects/new') ? '#EDF2F7' : ''}
                                _hover={isActive('/projects/new') ? {bg: '#dadada'} : {}}
                                p={"10px"}
                                borderRadius={"10px"}
                                textAlign={"center"}>
                                <Icon mb={"-2px"} mr={"3px"} w={5} h={4} as={MdOutlineCreateNewFolder}/>
                                New
                            </Link>
                        </NextLink>
                        <NextLink href='/projects/inprogress' passHref>
                            <Link
                                alignSelf={"flex-end"}
                                w={"90%"}
                                borderLeft={"1px solid gray.600"}
                                color={isActive('/projects/inprogress') ? '#5031c2' : '#000000'}
                                bg={isActive('/projects/inprogress') ? '#EDF2F7' : ''}
                                _hover={isActive('/projects/inprogress') ? {bg: '#dadada'} : {}}
                                p={"10px"}
                                borderRadius={"10px"}
                                textAlign={"center"}>
                                <Icon mb={"-2px"} mr={"3px"} w={5} h={4} as={GrInProgress}/>
                                Progress
                            </Link>
                        </NextLink>
                        <NextLink href='/projects/completed' passHref>
                            <Link
                                alignSelf={"flex-end"}
                                w={"90%"}
                                borderLeft={"1px solid gray.600"}
                                color={isActive('/projects/completed') ? '#5031c2' : '#000000'}
                                bg={isActive('/projects/completed') ? '#EDF2F7' : ''}
                                _hover={isActive('/projects/completed') ? {bg: '#dadada'} : {}}
                                p={"10px"}
                                borderRadius={"10px"}
                                textAlign={"center"}>
                                <Icon mb={"-2px"} mr={"3px"} w={5} h={4} as={MdDoneOutline}/>
                                Completed
                            </Link>
                        </NextLink>
                    </>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default Sidebar;