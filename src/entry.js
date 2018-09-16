main = require('./index');
main.main({}).then(final =>
  console.log(final)
).catch(err => {
    console.log("Error!: " + err)
});
