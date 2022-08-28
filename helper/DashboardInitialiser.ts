import {MdCancelPresentation, MdDoneOutline, MdOutlineCreateNewFolder, MdOutlineUnarchive} from "react-icons/md";
import {GrInProgress} from "react-icons/gr";
import {StatusCard} from "./AppInterfaces";
export function getCardsByStatusDefault(): StatusCard[] {
    const result: StatusCard[] = [
        {
            icon: MdOutlineCreateNewFolder,
            title: "New",
            value: 0,
            percentageOfTotal: 0,
            backgroundColor: "#673ab7",
        },
        {
            icon: GrInProgress,
            title: "In Progress",
            value: 0,
            percentageOfTotal: 0,
            backgroundColor: "#07acce",
        },
        {
            icon: MdDoneOutline,
            title: "Completed",
            value: 0,
            percentageOfTotal: 0,
            backgroundColor: "#2e7d32"

        },
        {
            icon: MdCancelPresentation,
            title: "Cancelled",
            value: 0,
            percentageOfTotal: 0,
            backgroundColor: "#e91e63"
        },
        {
            icon: MdOutlineUnarchive,
            title: "Archived",
            value: 0,
            percentageOfTotal: 0,
            backgroundColor: "yellow.500"
        }
    ];
    return  result;
}
export function getDefaultForTopFiveMostExpensiveProjects(){
    const result = {
        labels: [],
        datasets: [
            {
                label: 'Top 5 Most Expensive Projects',
                data: [],
                backgroundColor: '#f60e71',
            }
        ]
    };
    return result;
}

export function getDefaultForProjectsCountByStatus(){
    const result = {
        "labels": [
        "Projects count by Status",
    ],
        "datasets": [
        {
            "label": "New",
            "data": [
                0
            ],
            "backgroundColor": "#673ab7"
        },
        {
            "label": "In Progress",
            "data": [
                0
            ],
            "backgroundColor": "#1de9b6"
        },
        {
            "label": "Completed",
            "data": [
                0
            ],
            "backgroundColor": "#43a047"
        },
        {
            "label": "Cancelled",
            "data": [
                0
            ],
            "backgroundColor": "#e91e63"
        }
    ]
    };
    return result;
}