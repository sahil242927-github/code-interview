const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `race is done ${output}`;
}

async function sequential() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequential is done ${output1} ${output2} ${output3}`;
}

/* Note :  parallel().then(console.log) === parallel().then(data => console.log(data));*/
parallel().then(console.log);
sequential().then(console.log);
race().then(console.log);
