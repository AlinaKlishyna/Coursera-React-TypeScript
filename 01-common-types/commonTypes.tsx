import React from "react";

type PersonProps = {
    name: string;
    myAge: number;
    isFemale: boolean;
}

type AnimalListType = {
    animals: string[]
    animalType: 'bird' | 'fish' | 'mammal'
}

type SomeObjExamples = {
    obj: object;
    obj2: {};
    item: {
        id: string;
        name: string;
    };
    items: {
        id: string;
        name: string;
    }[];
}

type Item = {
    if: string;
    name: string;
}

type Items = {
    item: Item;
    items: Item[];
}

type CustomeItemHash = {
    [key: string]: Item
}

type CustomeItemHash2 = {
    [key: number]: string
}

type Function = {
    onHover: () => void;
    onChange: (id: number) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const someFunc = (a: number, b: number) => {
    return a + b
}

type OptionalProps = {
    required: string;
    optional?: string;
}

type OptionalProps2 = {
    required: string;
    optional?: string;
}

interface OptionalProps3 {
    required: string;
    optional?: string;
}

export { }