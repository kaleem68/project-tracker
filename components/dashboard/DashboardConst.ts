import {Budget} from "../../interfaces";
import {MdCancelPresentation, MdDoneOutline, MdOutlineCreateNewFolder, MdOutlineUnarchive} from "react-icons/md";
import {GrInProgress} from "react-icons/gr";
export function getCardsByStatusDefault(): Budget[] {
    let result: Budget[] = [
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
