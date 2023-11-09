const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Estamos conectados a la db');
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
