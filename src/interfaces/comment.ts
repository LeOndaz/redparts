export interface IComment {
    id: string;
    avatar: string;
    author: string;
    postTitle?: string;
    text: string;
    date: string;
    children?: this[];
}
