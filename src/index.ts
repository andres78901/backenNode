import app from "./app/app";
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`------------------ Init Server on port ${port}`);
});