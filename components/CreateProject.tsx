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
    Stack
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

interface Project {
    title: string,
}

const defaultProject: Project = {
    title: '',
}

function CreateProject({isOpen, onClose}) {
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
    } = useForm({
        defaultValues: defaultProject
    })

    function onSubmit(values) {
        reset()
    }
    function closeForm(){
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
                        <FormControl isInvalid={errors?.title ? true : false}>
                            <FormLabel htmlFor='title'>* Title</FormLabel>
                            <Input
                                id='title'
                                placeholder='title'
                                {...register('title', {
                                    required: 'This is required',
                                    maxLength: {value: 4, message: 'Maximum length should be 4'}
                                })}
                            />
                            <FormErrorMessage>{errors.title?.type === 'required' && 'This is required'}</FormErrorMessage>
                            <FormErrorMessage>{errors.title?.type === 'maxLength' && 'Maximum length should be 4'}</FormErrorMessage>
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