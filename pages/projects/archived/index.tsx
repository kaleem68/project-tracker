import {
    Badge,
    Button,
    Center,
    HStack,
    SimpleGrid,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Thead,
    Tr,
    useToast
} from "@chakra-ui/react";
import React from "react";
import {NextPage} from "next";
import {useQuery, useMutation, withWunderGraph} from "../../../components/generated/nextjs";
import {formatToCurrency} from "../../../helper/AppUtil";
import {DeleteIcon} from "@chakra-ui/icons";
import Loader from "../../../components/Loader";

const Archived: NextPage = () => {
    const toast = useToast()
    const projects = useQuery.GetArchivedProjects();
    const {mutate: archiveProject} = useMutation.UpdateArchiveStatus();
    const {mutate: deleteProject} = useMutation.DeleteProject();

    async function unarchiveProjectStatus(id: number) {
        let resp = await archiveProject({
            input: {
                id: id,
                archived: {set: false}
            }
        })
        if (resp.status === "ok" && resp.data.db_updateOneProject) {
            toast({
                title: 'Success',
                description: "Project unarchived",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Error",
                description: "Oops, Something went wrong",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    }

    function getColorScheme(status: string) {
        switch (status) {
            case "NEW":
                return "purple";
            case "COMPLETED":
                return "green";
            case "CANCELLED":
                return "red";
            default:
                return "teal";
        }
    }

    async function deleteProjectAction(id: number) {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (confirmDelete) {
            let resp = await deleteProject({
                input: {
                    id: id
                }
            })
            if (resp.status === "ok" && resp.data.db_deleteOneProject) {
                toast({
                    title: 'Success',
                    description: "Project deleted",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: "Error",
                    description: "Oops, Something went wrong",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        }
    }

    if (projects.result.status === "error") {
        return (<Text fontSize={"18px"} size={"xl"}>Error...</Text>)
    }
    if (projects.result.status !== "ok") {
        return (<Loader/>)
    }
    return (
        <>
            <SimpleGrid gap='22px'>
                <Stack>
                    <Stack
                        bg='white'
                        boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                        borderColor={'#9FA2B4'}
                    >
                        <HStack borderBottom={'1px solid #DFE0EB'} p='14px'>
                            <Text fontSize={'16px'} fontWeight='700'>Archived Projects</Text>
                        </HStack>
                        <Stack
                            maxH={"85vh"}
                            overflow={"scroll"}
                            p='16px'>
                            <Table variant={'unstyled'}>
                                <Thead>
                                    <Tr borderBottom={'1px solid #DFE0EB'} fontWeight={'700'} fontSize='14px'>
                                        <Td>Id</Td>
                                        <Td>Name</Td>
                                        <Td>Description</Td>
                                        <Td>Budget</Td>
                                        <Td>Date</Td>
                                        <Td>Status</Td>
                                        <Td>Actions</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {projects.result.data["db_findManyProject"].map((data) =>
                                        <Tr
                                            key={data.id}
                                            fontWeight={'700'} fontSize='14px'
                                            borderBottom={'1px solid #DFE0EB'}
                                        >
                                            <Td>
                                                <Center
                                                    p={2}
                                                    h='40px' border={'1px solid #9FA2B4'} borderRadius='8px'>
                                                    {data.id}
                                                </Center>
                                            </Td>
                                            <Td>
                                                <Center
                                                    p={2}
                                                    minH='40px' border={'1px solid #9FA2B4'} borderRadius='8px'>
                                                    {data.name}
                                                </Center>
                                            </Td>
                                            <Td>
                                                <Center
                                                    p={2}
                                                    minH='40px' border={'1px solid #9FA2B4'} borderRadius='8px'>
                                                    {data.description}
                                                </Center>
                                            </Td>
                                            <Td>
                                                <Center
                                                    p={2}
                                                    minH='40px' border={'1px solid #9FA2B4'} borderRadius='8px'>
                                                    ${formatToCurrency(data.budget)}
                                                </Center>
                                            </Td>
                                            <Td>
                                                <Center
                                                    p={2}
                                                    h='40px' border={'1px solid #9FA2B4'} borderRadius='8px'>
                                                    {new Date(data.createdAt).toISOString().split('T')[0]}
                                                </Center>
                                            </Td>
                                            <Td ml={"10px"}>
                                                <Badge ml={"10px"}
                                                       colorScheme={getColorScheme(data.status)}>{data.status}</Badge>
                                            </Td>
                                            <Td>
                                                <Stack
                                                    alignItems={"center"}
                                                    spacing={"10px"} isInline>
                                                    <Button
                                                        bg={"yellow.400"}
                                                        size={"sm"}
                                                        onClick={() => {
                                                            unarchiveProjectStatus(data.id)
                                                        }}>
                                                        Unarchive
                                                    </Button>
                                                    <DeleteIcon
                                                        onClick={() => deleteProjectAction(data.id)}
                                                        fontSize={'18px'}
                                                        cursor={"pointer"}/>
                                                </Stack>
                                            </Td>
                                            <Td></Td>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </Stack>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </>
    )
}
export default withWunderGraph(Archived);