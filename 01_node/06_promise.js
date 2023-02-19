setTimeout(() => {
  console.log("xxxx");
});

queueMicrotask(()=>{
    console.log("xxxxxx")
})
Promise.resolve(10).then((result) => {
  console.log(result);
});
