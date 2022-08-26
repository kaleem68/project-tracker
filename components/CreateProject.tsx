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
import {CreateProjectInput} from "./generated/models";
const defaultProject: CreateProjectInput = {
    name: '',
    description: ''
}
function CreateProject({isOpen, onClose, onSuccess}) {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
    } = useForm<CreateProjectInput>({
        defaultValues: defaultProject
    })
    const {mutate} = useMutation.CreateProject();

    async function onSubmit(values: CreateProjectInput) {
        const {name, description} = values;
        let saved = await mutate({
            input: {name, description}
        });
        toast({
            title: 'Success',
            description: 'Project created',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        console.log("saved ",saved)
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
                    <Badge ml={"10px"} colorScheme='purple'>New</Badge>
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
                        <FormControl isInvalid={errors?.description ? true : false}>
                            <FormLabel htmlFor='description'>* Description</FormLabel>
                            <Textarea
                                rows={5}
                                id='description'
                                placeholder='description'
                                {...register('description', {
                                    required: 'This is required',
                                    maxLength: {value: 1000, message: 'Maximum length should be 1000'}
                                })}
                            />
                            <FormErrorMessage>{errors.description?.type === 'required' && 'This is required'}</FormErrorMessage>
                            <FormErrorMessage>{errors.description?.type === 'maxLength' && 'Maximum length should be 1000'}</FormErrorMessage>
                        </FormControl>
                        <br/>
                        <FormControl isInvalid={errors?.createdAt ? true : false}>
                            <FormLabel htmlFor='createdAt'>* Creation Date</FormLabel>
                            <Input
                                type={"date"}
                                id='createdAt'
                                {...register('createdAt', {
                                    required: 'This is required'
                                })}
                            />
                            <FormErrorMessage>{errors.createdAt?.type === 'required' && 'This is required'}</FormErrorMessage>
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