export default function getStudentIdsSum(students) {
  return students.reduce((idSum, students) => idSum + students.id, 0);
}
