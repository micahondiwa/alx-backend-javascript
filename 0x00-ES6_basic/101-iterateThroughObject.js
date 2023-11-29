export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = Array.from(reportWithIterator).join(' | ');
  return employeeNames;
}
