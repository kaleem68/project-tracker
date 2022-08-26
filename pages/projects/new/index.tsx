import {
    Center,
    HStack,
    SimpleGrid,
    Stack,
    Table,
    Tbody,
    Td,
    Thead,
    Tr,
    Text,
    Badge,
    Button,
    useToast
} from "@chakra-ui/react";
import React, {useState} from "react";
import {AddIcon, EditIcon} from "@chakra-ui/icons";
import {NextPage} from "next";
import {useMutation, useQuery, withWunderGraph} from "../../../components/generated/nextjs";
import CreateProject from "../../../components/CreateProject";
const NewProjects: NextPage = () => {
    const toast = useToast()
    const [createProject, setCreateProject] = useState(false);
    const projects = useQuery.GetProjects();
    const {mutate: updateProjectStatus} = useMutation.UpdateProjectStatus();
    function enableCreateProject(){
        setCreateProject(true);
    }
    function cancelCreateProject(){
        setCreateProject(false);
    }
    function projectCreatedSuccessfully(){
        projects.refetch();
        setCreateProject(false);
    }
    async function changeStatusToProgress(id: number) {
        await updateProjectStatus({
            input: {
                id: id,
                status: "PROGRESS"
            }
        })
        toast({
            title: "Project status changed to progress",
            status: "success",
            duration: 4000,
            isClosable: true
        })
    }

    return (
        <>
            <SimpleGrid gap='22px'>
            <Stack>
                <Stack bg='white' boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                       borderRadius='8px'
                       border='1px solid #9FA2B4' borderColor={'#9FA2B4'}>
                    <HStack borderBottom={'1px solid #DFE0EB'} p='14px'>
                        <Text fontSize={'16px'} fontWeight='700'>New Projects</Text>
                        <AddIcon onClick={enableCreateProject} cursor={"pointer"}/>
                    </HStack>
                    {projects.result.status === "ok" && (
                        <Stack p='16px'>
                            <Table variant={'unstyled'}>
                                <Thead>
                                    <Tr borderBottom={'1px solid #DFE0EB'} fontWeight={'700'}
                                        fontSize='14px'>
                                        <Td>Id</Td>
                                        <Td>Name</Td>
                                        <Td>Description</Td>
                                        <Td>Date</Td>
                                        <Td>Status</Td>
                                        <Td>Actions</Td>
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
                                            <Td p='8px' mr='20px' w='181px'>
                                                <Center h='40px'
                                                        border={'1px solid #9FA2B4'}
                                                        borderRadius='8px'>
                                                    {data.description}
                                                </Center>
                                            </Td>
                                            <Td p='8px' mr='20px' w='181px'>
                                                <Center h='40px'
                                                        border={'1px solid #9FA2B4'}
                                                        borderRadius='8px'>
                                                    {new Date(data.createdAt).toLocaleDateString()}
                                                </Center>
                                            </Td>
                                            <Td ml={"10px"}>
                                                <Badge ml={"10px"} colorScheme='purple'>New</Badge>
                                            </Td>
                                            <Td>
                                                <Stack
                                                    spacing={"10px"} isInline>
                                                    <Button onClick={()=> {changeStatusToProgress(data.id)}}
                                                        bg={"green.300"} size={"sm"}>Start</Button>
                                                    <EditIcon alignSelf={'center'} fontSize={'16px'} cursor={"pointer"}/>
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
            <CreateProject isOpen={createProject} onClose={cancelCreateProject} onSuccess={projectCreatedSuccessfully}/>
        </>
    )
}
export default withWunderGraph(NewProjects);