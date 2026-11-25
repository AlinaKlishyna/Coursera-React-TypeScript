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

export { }