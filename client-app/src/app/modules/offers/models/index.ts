import { EngineTypes, ManufacturerTypes } from "../enums";

export interface Offer {
    id: number;
    title: string;
    model: string;
    price: number;
    engineType: EngineTypes;
    manufacturer: ManufacturerTypes;
    importFrom: string;
    publishedBy: string;
    gallery: string[]; //attached images links
    year: string;
    description: string;
}

export interface FilterFlagButton {
    id: number;
    order: number;
    flag: string;
    label: string;
};

export interface Filter {
    name: string;
    value: string | number;
}