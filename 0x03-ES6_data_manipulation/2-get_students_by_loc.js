export default function getStudentsByLocation(students, city) {
  return students.filter((stud) => stud.location === city);
}
