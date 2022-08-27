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