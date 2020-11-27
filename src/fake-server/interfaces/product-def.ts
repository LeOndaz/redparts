import {IImage} from "~/interfaces/product";

export interface IProductAttributesDef {
    [slug: string]: string | string[] | [true, string, ...string[]];
}

export interface IProductDef {
    name: string;
    slug: string;
    sku: string;
    price: number;
    compareAtPrice?: number;
    images: IImage[];
    badges?: string|string[];
    rating: number;
    reviews: number;
    availability: string;
    brand?: string;
    categories?: string[];
    attributes?: IProductAttributesDef;
    compatibility?: 'all' | 'unknown' | string[];
}
