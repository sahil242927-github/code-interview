const p = new Promise((resolve, reject) => {
  if (true) {
    resolve("Done!");
  } else {
    reject("Not done!");
  }
});

p.then(result => result)
  .then(result2 => result2)
  .catch(() => console.log("Error occured"))
  .then(result3 => {
    throw new Error("Test");
    console.log(result3, "!");
  })
  .finally(() => console.log("mail sent!!"));
