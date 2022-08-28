import {HStack, Stack, Text} from "@chakra-ui/react";
import {Bar} from 'react-chartjs-2';
import {getDefaultForProjectsCountByStatus} from "../../helper/DashboardInitialiser";

function ProjectsCountByStatus({projects}) {
    function displayProjectsByStatus() {
        let result = getDefaultForProjectsCountByStatus();
        for (let i = 0; i < projects?.length; i++) {
            let project = projects[i];
            let count = project._count.id
            if (project.status === "NEW") {
                result.datasets[0].data[0] = count;
            } else if (project.status === "PROGRESS") {
                result.datasets[1].data[0] = count;
            } else if (project.status === "COMPLETED") {
                result.datasets[2].data[0] = count;
            } else if (project.status === "CANCELLED") {
                result.datasets[3].data[0] = count;
            }
        }
        return result;
    }

    return (
        <Stack boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} border={' 1px solid rgba(0, 0, 0, 0.05)'} bg='#FFFFFF'
               borderRadius={'8px'} p={'20px'} spacing='20px'>
            <HStack justify={'space-between'}>
                <Text fontSize={'18px'} fontWeight='500'>Projects - Status</Text>
            </HStack>
            <Bar data={displayProjectsByStatus()}/>
        </Stack>
    )
}

export default ProjectsCountByStatus;