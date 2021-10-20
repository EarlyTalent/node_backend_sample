require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const blogSeed = [
  {
    name: "The Realm of Software Development",
    comments: [
        {
            text: "Interesting material..."
        }
    ]
  },
  {
    name: "Lookout World, it's Dev Time!",
    comments: [
        {
            text: "I found the content very helpful and fun to read."
        }
    ]
  },
];

db.Blog.deleteMany({})
  .then(() => db.Blog.collection.insertMany(blogSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
