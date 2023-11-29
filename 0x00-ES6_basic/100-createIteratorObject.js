export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  const iterator = {
    [Symbol.iterator]() {
      let departmentIndex = 0;
      let employeeIndex = 0;
      const departments = Object.keys(employees);

      return {
        next() {
          if (departmentIndex < departments.length) {
            const department = departments[departmentIndex];
            const departmentEmployees = employees[department];

            if (employeeIndex < departmentEmployees.length) {
              const employee = departmentEmployees[employeeIndex];
              employeeIndex = +1;
              return { value: employee, done: false };
            }

            departmentIndex += 1;
            employeeIndex = 0;
            return this.next();
          }

          return { done: true };
        },
      };
    },
  };

  return iterator;
}
