export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = Array.from(reportWithIterator);
  return employeeNames.join(' | ');
}
