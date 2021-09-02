const { app, PORT } = require("./app");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
