"use strict";
/**
 * Building a teacher interface with elements:
 * firstName(string), lastName(string), fullTimeEmployee(boolean),
 * yearsOfExperience(number), location(string)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = exports.printTeacher = void 0;
;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
