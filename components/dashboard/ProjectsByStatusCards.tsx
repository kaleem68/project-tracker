import {SimpleGrid} from "@chakra-ui/react";
import {calculateCardsStatusValues} from "./DashboardUtil";
import BudgetCard from "./BudgetCard";
function ProjectsByStatusCards({projects, archiveCount}) {
    return (
        <SimpleGrid columns={[5]} gap='30px'>
            {calculateCardsStatusValues(projects, archiveCount).map((budget, index)=>{
                return(
                    <BudgetCard key={index} budget={budget}/>
                )
            })}
        </SimpleGrid>
    )
}
export default ProjectsByStatusCards