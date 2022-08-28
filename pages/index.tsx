import {NextPage} from 'next';
import {useLiveQuery, withWunderGraph} from '../components/generated/nextjs';
import {GridItem, SimpleGrid, Stack} from "@chakra-ui/react";
import React from "react";
import TopFiveMostExpensiveProjects from "../components/dashboard/TopFiveMostExpensiveProjects";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import ProjectsByStatus from "../components/dashboard/ProjectsCountByStatus";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Dashboard: NextPage = () => {
    const mostExpensiveProjects = useLiveQuery.TopFiveMostExpensiveProjects()
    const projectsCountGroupByStatus = useLiveQuery.GetProjectsCountGroupByStatus()

    return (
        <Stack bg='#E5E5E5' h='100vh'>
            <SimpleGrid columns={4} pt={'24px'} spacing='24px'>
                <GridItem colSpan={2}>
                    {mostExpensiveProjects.result.status == "ok" &&
                        <TopFiveMostExpensiveProjects projects={mostExpensiveProjects.result.data?.db_findManyProject}/>
                    }
                </GridItem>
                <GridItem colSpan={2}>
                    {projectsCountGroupByStatus.result.status == "ok" &&
                        <ProjectsByStatus projects={projectsCountGroupByStatus.result.data?.db_groupByProject}/>
                    }
                </GridItem>
            </SimpleGrid>
        </Stack>
    )
};
export default withWunderGraph(Dashboard);
