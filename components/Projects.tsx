import {useQuery} from "./generated/nextjs";
import {Center, HStack, SimpleGrid, Stack, Table, Tbody, Td, Thead, Tr, Text} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import React from "react";
import {AddIcon, DeleteIcon, EditIcon} from "@chakra-ui/icons";
function Projects(){
    const projects = useQuery.GetProjects();
    return (
        <HStack align={'flex-start'} justifyContent={"space-between"} spacing={0}>
            <Sidebar/>
            <Stack w="calc(100% - 250px)" boxSizing='border-box' spacing={0}>
                <Header subtitle='Business Plan Periods'/>
                <Stack p='30px' bg='#E5E5E5' h='100vh'>
                    <Stack bg="#E5E5E5">
                        <SimpleGrid gap='22px' pl='18px' py='14px'>
                            <Stack spacing='20px'>
                                <Stack bg='white' boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                                       borderRadius='8px'
                                       border='1px solid #9FA2B4' borderColor={'#9FA2B4'}>
                                    <HStack borderBottom={'1px solid #DFE0EB'} p='14px'>
                                        <Text fontSize={'16px'} fontWeight='700'>Projects</Text>
                                        <AddIcon cursor={"pointer"}/>
                                    </HStack>
                                    {projects.result.status === "ok" && (
                                        <Stack p='16px'>
                                            <Table variant={'unstyled'}>
                                                <Thead>
                                                    <Tr borderBottom={'1px solid #DFE0EB'} fontWeight={'700'}
                                                        fontSize='14px'>
                                                        <Td>Id</Td>
                                                        <Td>Name</Td>
                                                        <Td></Td>
                                                        <Td></Td>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {projects.result.data["db_findManyProject"].map((data, index) =>
                                                        <Tr
                                                            key={index}
                                                            fontWeight={'700'} fontSize='14px'
                                                            borderBottom={'1px solid #DFE0EB'}>
                                                            <Td p='8px' mr='20px' w='181px'>
                                                                <Center h='40px'
                                                                        border={'1px solid #9FA2B4'}
                                                                        borderRadius='8px'>
                                                                    {data.id}
                                                                </Center>
                                                            </Td>
                                                            <Td p='8px' mr='20px' w='181px'>
                                                                <Center h='40px'
                                                                        border={'1px solid #9FA2B4'}
                                                                        borderRadius='8px'>
                                                                    {data.name}
                                                                </Center>
                                                            </Td>
                                                            <Td>
                                                                <Stack
                                                                    spacing={"10px"}
                                                                    isInline>
                                                                    <EditIcon
                                                                        fontSize={'16px'}
                                                                        cursor={"pointer"}/>
                                                                    <DeleteIcon
                                                                        fontSize={'16px'}
                                                                        cursor={"pointer"}/>
                                                                </Stack>
                                                            </Td>
                                                            <Td></Td>
                                                        </Tr>
                                                    )}
                                                </Tbody>
                                            </Table>
                                        </Stack>
                                    )}
                                </Stack>
                            </Stack>
                        </SimpleGrid>
                    </Stack>
                </Stack>
            </Stack>
        </HStack>
        // <div>
        //     {projects.result.status === "ok" &&
        //         projects.result.data["db_findManyProject"].map(project=> {
        //             return(
        //                 <div key={project.id}>{project.name}</div>
        //             )
        //         })
        //     }
        // </div>
    )
}
export default Projects