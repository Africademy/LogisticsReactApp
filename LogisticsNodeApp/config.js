const db_ip_port = "65.2.79.213:4542";
const DB = {
  localhost: {
    url: "mongodb://localhost:27017/LogisticsDb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  },
  server: {
    url: `mongodb://${db_ip_port}/logisticsdb`,
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  }
}
var config = {
  DB_CONNECTION: DB.server.url,
  TOKKEN_SECRET: DB.server.key
};
module.exports = config;