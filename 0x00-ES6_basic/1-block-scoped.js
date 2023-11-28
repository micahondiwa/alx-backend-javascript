export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    var innerTask = true;
    var innerTask2 = false;
  }

  return [task || innerTask, task2 || innerTask2];
}
