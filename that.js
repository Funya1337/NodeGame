const readline = require('readline');
function getRand5() {
  const r1 = Math.random();
  const r2 = r1 * 5;
  const r3 = Math.floor(r2);
  return r3;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('that your arena');
let arena2 = [];
for(let i=0; i<5; i++) {
  arena2[i]=[];
  for(let j=0; j<5;j++) {
    arena2[i][j]=0;
  }
}
console.log(arena2);
var recursiveAsyncReadLine = () => {
  rl.question('Put the nubmer and start play!(x for exit): ', (answer) => {
    if (answer === 'x') {
      return rl.close();
    }else {
      const row = getRand5();
      const col = getRand5();
      arena2[row][col] = 1;
      console.log(arena2);
      console.log(answer);
    }
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();
