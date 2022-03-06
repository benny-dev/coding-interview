function findSum(arr, target) {
  const map = {};
  arr.forEach((num) => {
    map[num] = 1;
  });

  for (let i = 0; i < arr.length; i++) {
    let addOn = arr[i];
    const otherAddOn = target - addOn;
    if (otherAddOn in map) {
      return [addOn, otherAddOn];
    }
  }

  return -1;
}

const arr = [];

for (let i = 1; i <= 10000000; i++) {
  arr.push(i);
}

const target = 10_000_000 + 9999999;
console.log(findSum(arr, target));
