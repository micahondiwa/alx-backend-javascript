export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  for (const department of reportWithIterator.allEmployees) {
    const employeesInDepartment = reportWithIterator.allEmployees[department];
    employeeNames.push(...employeesInDepartment);
  }
  return employeeNames.join(' | ');
}
