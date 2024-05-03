const { app } = require('./src/app');
const { connectToMongoDB } = require('./src/db');

const PORT = process.env.PORT || 4000;

connectToMongoDB()
  .then(
    app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
  )
  .catch((err) => console.log(err));
