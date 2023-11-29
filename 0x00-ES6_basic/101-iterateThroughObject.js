export default function iterateThroughObject(reportWithIterator) {
  let allEmployeesString = '';
  for (const department of reportWithIterator) {
    for (const employee of reportWithIterator[department]) {
      allEmployeesString += `${employee} | `;
    }
  }
  return allEmployeesString.slice(0, -2); // Remove the trailing ' | '
}
