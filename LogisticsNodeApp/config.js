const DB = {
  localhost: {
    url: "mongodb://localhost:27017/LogisticsDb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  },
  server: {
    url: "mongodb://13.233.146.100:4542/logisticsdb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  }
}
var config = {
  DB_CONNECTION: DB.server.url,
  TOKKEN_SECRET: DB.server.key
};
module.exports = config;