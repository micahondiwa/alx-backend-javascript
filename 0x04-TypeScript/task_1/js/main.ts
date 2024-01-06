/**
 * Building a teacher interface with elements:
 * firstName(string), lastName(string), fullTimeEmployee(boolean),
 * yearsOfExperience(number), location(string)
 */

export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience: string,
    location: string,
    [index: string]: any,
};

export interface Director extends Teacher {
    numberOfReport: number,
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface ISTudentClassConstructor {
    new(firstName: string, lastName: string): ISTudentClass;
}

export interface ISTudentClass {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements ISTudentClass {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}