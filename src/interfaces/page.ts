import {SelectedAttribute} from "~/api/graphql/types";

export interface IPage {
    slug: string,
    title: string,
    contentHTML: string,
    backgroundImage?: string
    attributes: SelectedAttribute[];
    lastModified: string
}
