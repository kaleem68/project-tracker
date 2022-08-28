import {NextPage} from 'next';
import {useLiveQuery, withWunderGraph} from '../components/generated/nextjs';
import {Stack} from "@chakra-ui/react";
import React from "react";
import TopFiveMostExpensiveProjects from "../components/dashboard/TopFiveMostExpensiveProjects";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

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
    return (
        <Stack bg='#E5E5E5' h='100vh'>
            {mostExpensiveProjects?.result?.status == "ok" &&
                <TopFiveMostExpensiveProjects projects={mostExpensiveProjects.result.data?.db_findManyProject}/>
            }
        </Stack>
    )
};
export default withWunderGraph(Dashboard);
