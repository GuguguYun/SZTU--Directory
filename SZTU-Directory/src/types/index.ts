export interface TeacherInter {
    id:number;
    name:string;
    sno:string | null;
    inline:number | null;
    outline:number | null;
    department_sno:number | null;
    department:string;
    email:string;
    address:string;
} 

export interface TreeNode {
    id: number;
    name: string;
    open: "closed" | "" | "open";
    status: boolean;
    children: TreeNode[] | null;
}

export interface Root {
    account: string;
    password: string;
    status:number;
}