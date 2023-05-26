// import mongoose from 'mongoose';

// export const connectDB = async () => {
//   const { connection } = await mongoose.connect(process.env.MONGO_URI);
//   console.log(`Mongodb is connected with ${connection.host}`);
// };

import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'razor',
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
