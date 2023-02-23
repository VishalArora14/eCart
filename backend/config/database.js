const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server ${data.connection.host}`);
    });
  
  // .catch((err)=>{
  //   console.log(err);
  // })
  //now no need to use catch since then it will be a unhandled catch
};

module.exports = connectDatabase;
