export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const temTask = task;
    const tempTask2 = task2;

    task = true;
    task2 = false;

    task = temTask;
    task2 = tempTask2;
  }

  return [task, task2];
}
