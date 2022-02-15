let args = process.argv;
args = args.slice(2);
args = args.filter(a=>{
  a = Number(a);
  return a >= 0 && !Number.isNaN(a);
});
// console.log(args);
args.forEach(a=>{
  setTimeout(()=>{
    process.stdout.write('\x07');
  }, a * 1000)
});

let maxCount = Math.max(...args);

for (let count = 0; count <= maxCount; count++) {
  setTimeout(() => {
    process.stdout.write('\r' + count.toString() + '         ');
    // console.log(count);
    // console.log(counter);
    // console.log(spin[counter]);
    // console.log("=====");
  }, count * 1000);
}
setTimeout(()=>{
  process.stdout.write("\n");
}, (maxCount + 1) * 1000);


