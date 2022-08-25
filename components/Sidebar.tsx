import {
    Divider,
    HStack,
    Input,
    InputGroup,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';

function Sidebar() {
    return (
        <Stack w='250px' bg='white' h='100vh'>
            <Stack py='23px' px='20px' spacing={'39px'}>
                <HStack justify={'space-between'}>
                    <Text fontWeight={"600"} fontSize={'18px'}>Track my project </Text>
                </HStack>
                <Stack>
                    <InputGroup bg='#00000008' borderRadius={'8px'}>
                        <Input type='search' placeholder='Search' _placeholder={{color: "#0000004D"}}/>
                    </InputGroup>
                    <Divider/>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default Sidebar;