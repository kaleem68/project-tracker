import {getCardsByStatusDefault} from "./DashboardConst";

export function calculateCardsStatusValues(projects: any, archiveCount) {
    let result = getCardsByStatusDefault();
    for (let i = 0; i < projects?.length; i++) {
        let project = projects[i];
        let count = project._count.id;
        switch (project.status){
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