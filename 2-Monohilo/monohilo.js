console.log("Hola mundo");

let i = 0;

setInterval(() => {
  console.log(i);
  i++;
  if (i === 5) {
    console.log("forzamos error");
    const a = 3 + z;
  }
}, 1000);

console.log("Segunda instrucción");
