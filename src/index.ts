import app from "./app";
import connectToMongoDB from "./db/connectToMongoDB";

const PORT = process.env.PORT || 4000;

connectToMongoDB()
  .then(
    app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
  )
  .catch((err) => console.log(err));
