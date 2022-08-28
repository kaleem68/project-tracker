export interface HeaderProps{
    title: String
}
export interface UpdateProject{
    id: number;
    name: string;
    description: string;
    budget: number;
}
export interface CreateProjectProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}
export interface EditProjectProps extends CreateProjectProps{
    defaultValues: UpdateProject;
    status: EditProjectPropsHeadingStatus
}
export enum EditProjectPropsHeadingStatus{
    NEW,
    PROGRESS
}
export interface StatusCard{
    title: string,
    value: number,
    percentageOfTotal: number,
    backgroundColor: string,
    icon: any
}
export interface StatusCardProps {
    statusCard: StatusCard
}