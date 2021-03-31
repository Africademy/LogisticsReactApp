const DB = {
  localhost: {
    url: "mongodb://localhost:27017/LogisticsDb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  },
  server: {
    url: "mongodb://13.233.146.100:4542/logistics",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  }
}
var config = {
  DB_CONNECTION: DB.localhost.url,
  TOKKEN_SECRET: DB.localhost.key
};
module.exports = config;