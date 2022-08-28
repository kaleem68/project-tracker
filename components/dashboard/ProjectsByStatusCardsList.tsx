import {SimpleGrid} from "@chakra-ui/react";
import ProjectByStatusCard from "./ProjectByStatusCard";
import {getCardsByStatusDefault} from "../../helper/DashboardInitialiser";

function ProjectsByStatusCardsList({projects, archiveCount}) {
    function calculateCardsStatusValues(projects: any, archiveCount: number) {
        const result = getCardsByStatusDefault();
        for (let i = 0; i < projects?.length; i++) {
            let project = projects[i];
            let count = project._count.id;
            switch (project.status) {
                case "NEW":
                    result[0].value = count;
                    break;
                case "PROGRESS":
                    result[1].value = count;
                    break;
                case "COMPLETED":
                    result[2].value = count;
                    break;
                case "CANCELLED":
                    result[3].value = count;
                    break;
            }
        }
        result[4].value = archiveCount;
        return result;
    }
    return (
        <SimpleGrid columns={[5]} gap='30px'>
            {calculateCardsStatusValues(projects, archiveCount).map((statusCard, index) => {
                return (
                    <ProjectByStatusCard key={index} statusCard={statusCard}/>
                )
            })}
        </SimpleGrid>
    )
}

export default ProjectsByStatusCardsList;