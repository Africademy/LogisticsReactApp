const db_ip = "15.206.178.8";
const db_port = "4542";
const DB = {
  localhost: {
    url: "mongodb://localhost:27017/LogisticsDb",
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  },
  server: {
    url: `mongodb://${db_ip}:${db_port}/logisticsdb`,
    key: "231sad_ItCanBeAnyRandString_UGHASD82371923192J"
  }
}
var config = {
  DB_CONNECTION: DB.server.url,
  TOKKEN_SECRET: DB.server.key
};
module.exports = config;