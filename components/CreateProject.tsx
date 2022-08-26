import {Modal, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    FormErrorMessage,
    Stack, useToast
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useMutation} from "./generated/nextjs";

interface Project {
    name: string,
}
const defaultProject: Project = {
    name: '',
}

function CreateProject({isOpen, onClose, onSuccess}) {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
    } = useForm<Project>({
        defaultValues: defaultProject
    })
    const {mutate} = useMutation.CreateProject()

    async function onSubmit(values) {
        await mutate({
            input: values
        });
        toast({
            title: 'Success',
            description: 'Project created',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        reset();
        onSuccess();
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
                    Create Project
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors?.name ? true : false}>
                            <FormLabel htmlFor='name'>* Name</FormLabel>
                            <Input
                                id='name'
                                placeholder='name'
                                {...register('name', {
                                    required: 'This is required',
                                    maxLength: {value: 255, message: 'Maximum length should be 255'}
                                })}
                            />
                            <FormErrorMessage>{errors.name?.type === 'required' && 'This is required'}</FormErrorMessage>
                            <FormErrorMessage>{errors.name?.type === 'maxLength' && 'Maximum length should be 255'}</FormErrorMessage>
                        </FormControl>
                        <br/>
                        <Stack alignItems={'flex-end'}>
                            <Button
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
export default CreateProject;