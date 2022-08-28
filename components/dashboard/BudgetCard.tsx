import {Circle, Stack, Text} from "@chakra-ui/react";
import {Budget} from "../../interfaces";
import {Icon} from "@chakra-ui/icons";
interface BudgetCardProps {
    budget: Budget
}
function BudgetCard(budget: BudgetCardProps) {
    let {backgroundColor, icon, value, title} = budget.budget
    return (
        <Stack
            align='center'
            justify={'center'}
            bg={backgroundColor}
            minH={"210px"}
            borderRightRadius={"50%"}
        >
            <Circle size={'45px'} bg='white'>
                <Icon
                    w={6}
                    h={7}
                    as={icon}/>
            </Circle>
            <Text textAlign={'center'} fontSize={'32px'} fontWeight='700' color={'#ffffff'}>
                {value}
                <Text
                    as='span'
                    fontSize={'24px'}>
                </Text>
            </Text>

            <Text fontSize={'18px'} fontWeight='500' color={'#FFFFFF'}>{title} </Text>

        </Stack>
    )
}
export default BudgetCard;