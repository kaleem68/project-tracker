import {Modal, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    FormErrorMessage,
    Stack, useToast, Badge, Textarea
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useMutation} from "./generated/nextjs";
import {EditProjectProps, EditProjectPropsHeadingStatus, UpdateProject} from "../interfaces";
function EditProject({isOpen, onClose, onSuccess, defaultValues, status}: EditProjectProps) {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<UpdateProject>({
        defaultValues: defaultValues
    })
    const {mutate: updateProject} = useMutation.UpdateProject();
    async function onSubmit(values) {
        const {id, name, description} = values
        let budget = +values.budget
        let resp = await updateProject({
            input: {
                id: id,
                name: {set: name},
                description: {set: description},
                budget: {set: budget}
            }
        })
        if (resp.status == "error") {
            toast({
                title: "Error",
                description: "Oops, Something went wrong",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        else{
            toast({
                title: 'Success',
                description: "Project updated",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            onSuccess();
            reset();
        }
    }
    function closeForm(): void {
        reset();
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={closeForm}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Edit Project
                    {status === EditProjectPropsHeadingStatus.NEW &&
                        <Badge ml={"10px"} colorScheme='purple'>New</Badge>
                    }
                    {status === EditProjectPropsHeadingStatus.PROGRESS &&
                        <Badge ml={"10px"} colorScheme='green'>In Progress</Badge>
                    }
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={!!errors?.name}>
                            <FormLabel htmlFor='name'>* Name</FormLabel>
                            <Input
                                id='name'
                                placeholder='name'
                                name={"name"}
                                {...register('name', {
                                    required: 'This is required',
                                    maxLength: {value: 255, message: 'Maximum length should be 255'}
                                })}
                            />
                            <FormErrorMessage>{ (errors.name?.type === 'required' || errors.name?.type === "maxLength") && errors.name.message }</FormErrorMessage>
                        </FormControl>
                        <br/>
                        <FormControl isInvalid={!!errors?.description}>
                            <FormLabel htmlFor='description'>* Description</FormLabel>
                            <Textarea
                                rows={5}
                                id='description'
                                name={"description"}
                                placeholder='description'
                                {...register('description', {
                                    required: 'This is required',
                                    maxLength: {value: 1000, message: 'Maximum length should be 1000'}
                                })}
                            />
                            <FormErrorMessage>{ (errors.description?.type === 'required' || errors.description?.type === "maxLength") && errors.description.message }</FormErrorMessage>
                        </FormControl>
                        <br/>

                        <FormControl isInvalid={!!errors?.budget}>
                            <FormLabel htmlFor='budget'>* Budget</FormLabel>
                            <Input
                                type={"number"}
                                id='budget'
                                name={"budget"}
                                placeholder='budget'
                                {...register('budget',{
                                    required: 'This is required',
                                    min: {value: -2, message: 'Minimum value should be -2'}
                                })}
                            />
                            <FormErrorMessage>{ (errors.budget?.type === 'required' || errors.budget?.type === "min") && errors.budget.message }</FormErrorMessage>
                        </FormControl>
                        <br/>
                        <Stack alignItems={'flex-end'}>
                            <Button
                                isLoading={isSubmitting}
                                type={"submit"}
                                fontSize={'14px'}
                                fontWeight={500}
                                bg='#5031c2'
                                w={'100px'}
                                h='40px'
                                color={'white'}
                                _hover={{
                                    bg: '#5a3dcb'
                                }}
                            >
                                Save
                            </Button>
                        </Stack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default EditProject;