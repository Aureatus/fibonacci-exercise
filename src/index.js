const fibs = (number) => {
  let fibSequence = [];
  for (let i = 0; i < number; i++) {
    const length = fibSequence.length;
    if (i === 0) fibSequence.push(0);
    else if (i === 1) fibSequence.push(1);
    else fibSequence.push(fibSequence[length - 1] + fibSequence[length - 2]);
  }
  return fibSequence;
};

const fibsRec = (n, array = [0, 1]) => {
  if (n === 0) return [];
  if (n === 1) return [array[0]];
  if (n === 2) return array;
  array.push(array.at(-1) + array.at(-2));
  return fibsRec(n - 1, array);
};
