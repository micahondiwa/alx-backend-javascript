export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = (employees) => Object.keys(employees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
