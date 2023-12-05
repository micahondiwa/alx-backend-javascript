export default function cleanSet(set, startString) {
  const str = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);
      if (subStr && subStr !== value) {
        str.push(subStr);
      }
    }
  }
  return str.join('-');
}
