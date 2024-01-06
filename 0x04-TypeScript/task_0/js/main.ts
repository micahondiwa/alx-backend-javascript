/**
 * An interface Student that accepts
 * the elements:
 * firstName(string),
 * lastName(string),
 * age(number),
 * location(string)
 */

export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

/**
 * Creating 2 students from Student and 
 * stroring them in a list
 */

const student1: Student = {
    firstName: 'Micah',
    lastName: 'Ondiwa',
    age: 29,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Oketch',
    lastName: 'Kondiwa',
    age: 30,
    location: 'Kenya'
};

const studentList: Array<Student> = [student1, student2];

/**
 * uses Vanilla js to render a table and for each
 * element in the array appending a new row to the
 * table.
 */

export const renderTable = (studentList: Array<Student>): void => {
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);

    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');


    for (const student of studentList) {
        const studentRow = document.createElement('tr')
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentList);