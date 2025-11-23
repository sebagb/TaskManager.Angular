import { TaskInfo } from "./task-info";

export interface ProjectInfo {
    id: string;
    deadline: number;
    status: string;
    tasks: TaskInfo[];
    title: string;
}
