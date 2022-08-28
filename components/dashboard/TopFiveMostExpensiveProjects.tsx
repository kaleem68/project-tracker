import {GridItem, HStack, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import React from 'react';
import { Bar } from 'react-chartjs-2';
function TopFiveMostExpensiveProjects({projects}) {
    function calculateTopProjects(){
        let result = {
            labels: [],
            datasets: [
                {
                    label: 'Top 5 Most Expensive Projects',
                    data: [],
                    backgroundColor: '#FF006E',
                }
            ]
        };
        for (let i = 0; i < projects.length; i++) {
            result.labels.push(projects[i].name);
            result.datasets[0].data.push(projects[i].budget);
        }
        return result;
    }
    return (
        <SimpleGrid columns={3} pt={'24px'} spacing='24px'>
            <GridItem colSpan={2}>
                <Stack w='100%' boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} border={' 1px solid rgba(0, 0, 0, 0.05)'}
                       bg='#FFFFFF' borderRadius={'8px'} p={'20px'} spacing='20px'>
                    <HStack justify={'space-between'}>
                        <Text fontSize={'18px'} fontWeight='500'>Top 5 - Expensive Projects</Text>
                    </HStack>
                    <Bar data={calculateTopProjects()}/>
                </Stack>
            </GridItem>
        </SimpleGrid>
    )

}

export default TopFiveMostExpensiveProjects;