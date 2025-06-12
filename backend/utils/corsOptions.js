const allowdOrigins = [
  "http://localhost:5173/",
  "http://localhost:5174/",
  "http://localhost:3000/",
  "http://localhost:3001/",
];

module.exports.corsOptions = {
  origin: (origin, callback) => {
    if (allowdOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("cors error, Blocked by cors origin policy"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
