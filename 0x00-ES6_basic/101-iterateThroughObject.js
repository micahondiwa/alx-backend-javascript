export default function createEmployeesObject(departmentName, employees) {
  const department = {};
  department[departmentName] = employees;
  return department;
}
