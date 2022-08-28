import {
    HStack,
    Text
} from '@chakra-ui/react';
import React from 'react';
import {HeaderProps} from "../helper/AppInterfaces";
function Header({title}: HeaderProps) {
    return (
        <HStack bg={'#ffffff'} justify='space-between' minH='84px' px='20px'>
            <HStack>
                <Text fontSize={'20px'} fontWeight={500} color='#000000' >{title}</Text>
            </HStack>
            <HStack spacing='12px'>
            </HStack>
        </HStack>
    );
}
export default Header;