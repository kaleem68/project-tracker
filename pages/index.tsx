import {NextPage} from 'next';
import {useLiveQuery, withWunderGraph} from '../components/generated/nextjs';
import {GridItem, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import React from "react";
import TopFiveMostExpensiveProjects from "../components/dashboard/TopFiveMostExpensiveProjects";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import ProjectsByStatus from "../components/dashboard/ProjectsCountByStatus";
import ProjectsByStatusCardsList from "../components/dashboard/ProjectsByStatusCardsList";
import Loader from "../components/Loader";

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
    const countArchiveProjects = useLiveQuery.CountArchiveProjects();

    function getArchiveCount() {
        let count = 0;
        if (countArchiveProjects.result.status === "ok") {
            count = countArchiveProjects.result.data?.db_aggregateProject._count.id
        }
        return count;
    }

    if (mostExpensiveProjects.result.status === "error" || projectsCountGroupByStatus.result.status === "error" || countArchiveProjects.result.status === "error") {
        return (<Text fontSize={"18px"} size={"xl"}>Error...</Text>)
    }
    if (mostExpensiveProjects.result.status !== "ok" || projectsCountGroupByStatus.result.status !== "ok" || countArchiveProjects.result.status !== "ok") {
        return (<Loader/>)
    }
    return (
        <Stack bg='#E5E5E5' h='100vh'>
            <ProjectsByStatusCardsList
                archiveCount={getArchiveCount()}
                projects={projectsCountGroupByStatus.result.data?.db_groupByProject}/>

            <SimpleGrid columns={4} pt={'24px'} spacing='24px'>
                <GridItem colSpan={2}>
                    <TopFiveMostExpensiveProjects projects={mostExpensiveProjects.result.data?.db_findManyProject}/>
                </GridItem>
                <GridItem colSpan={2}>
                    <ProjectsByStatus projects={projectsCountGroupByStatus.result.data?.db_groupByProject}/>
                </GridItem>
            </SimpleGrid>
        </Stack>
    )
};
export default withWunderGraph(Dashboard);
