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
    useToast,
    VStack
} from "@chakra-ui/react";
import React, {useState} from "react";
import {EditIcon} from "@chakra-ui/icons";
import {NextPage} from "next";
import {useLiveQuery, useMutation, withWunderGraph} from "../../../components/generated/nextjs";
import EditProject from "../../../components/EditProject";
import {formatToCurrency} from "../../../helper/AppUtil";
import {EditProjectPropsHeadingStatus, UpdateProject} from "../../../helper/AppInterfaces";
import Loader from "../../../components/Loader";

const InProgress: NextPage = () => {
    const toast = useToast()
    const projects = useLiveQuery.GetProjectsByStatus({
        input: {
            status: {equals: "PROGRESS"}
        }
    });
    const {mutate: updateProjectStatus} = useMutation.UpdateProjectStatus();
    const {mutate: archiveProject} = useMutation.UpdateArchiveStatus();

    const [editProject, setEditProject] = useState<boolean>(false);
    const [projectToBeEdited, setProjectToBeEdited] = useState<UpdateProject>(null);

    function cancelEditProject() {
        setEditProject(false);
    }

    function enableEditProject(data) {
        let editProject: UpdateProject = {
            id: data.id,
            name: data.name,
            description: data.description,
            budget: data.budget
        }
        setProjectToBeEdited(editProject);
        setEditProject(true);
    }

    function projectSaved() {
        setEditProject(false);
    }

    async function completeOrCancel(complete: boolean, id: number) {
        let successMessage = complete ? "Project completed" : "Project cancelled";
        //confirm before delete
        if (!complete) {
            let confirm = window.confirm("Are you sure you want to cancel this project?")
            if (!confirm) {
                return
            }
        }
        let resp = await updateProjectStatus({
            input: {
                id: id,
                status: complete ? "COMPLETED" : "CANCELLED"
            }
        })
        if (resp.status === "ok" && resp.data.db_updateOneProject) {
            toast({
                title: 'Success',
                description: successMessage,
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

    async function archiveProjectStatus(id: number) {
        let resp = await archiveProject({
            input: {
                id: id,
                archived: {set: true}
            }
        })
        if (resp.status === "ok" && resp.data.db_updateOneProject) {
            toast({
                title: 'Success',
                description: "Project archived",
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
                            <Text fontSize={'16px'} fontWeight='700'>Projects in progress</Text>
                        </HStack>
                        {projects.result.status === "ok" && (
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
                                                    <Badge ml={"10px"} colorScheme='teal'>{data.status}</Badge>
                                                </Td>
                                                <Td>
                                                    <Stack spacing={"10px"} isInline>
                                                        <VStack>
                                                            <Button onClick={() => {
                                                                completeOrCancel(true, data.id)
                                                            }} bg={"green.300"} size={"xs"}>Complete</Button>
                                                            <Button onClick={() => {
                                                                archiveProjectStatus(data.id)
                                                            }} bg={"blue.300"} size={"xs"}>Archive</Button>
                                                            <Button onClick={() => {
                                                                completeOrCancel(false, data.id)
                                                            }} bg={"red.300"} size={"xs"}>Cancel</Button>
                                                        </VStack>
                                                        <EditIcon
                                                            onClick={() => {
                                                                enableEditProject(data)
                                                            }}
                                                            alignSelf={'center'} fontSize={'16px'} cursor={"pointer"}
                                                        />
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
            {editProject && (
                <EditProject
                    status={EditProjectPropsHeadingStatus.PROGRESS}
                    isOpen={editProject}
                    onClose={cancelEditProject}
                    onSuccess={projectSaved}
                    defaultValues={projectToBeEdited}
                />
            )}
        </>
    )
}
export default withWunderGraph(InProgress);