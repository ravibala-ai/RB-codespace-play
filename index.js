const app = require("./app");
const {PORT} = process.env;

console.log("Hello Ravi's Codespace");

app.listen(PORT, () => {
    console.log(`SERVER is running at port: ${PORT}`);
})