console.log(globalThis == global);
console.log(1111);
// process.exit();
console.log(2222);
setTimeout(() => {
  console.log(1);
});

queueMicrotask(() => {
  console.log(2);
});

process.nextTick(() => {
  console.log(3);
});

console.log(4);
