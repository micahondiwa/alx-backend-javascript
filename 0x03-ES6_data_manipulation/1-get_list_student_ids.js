export default function getListStudentIds(obj) {
  const ids = obj instanceof Array ? obj.map((ob) => ob.id) : [];
  return ids;
}
