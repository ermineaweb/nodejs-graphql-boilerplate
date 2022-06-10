const query = require("./query");
const mutation = require("./mutation");
const subscription = require("./subscription");
const types = require("./types");

module.exports = {
  ...types,
  ...query,
  ...mutation,
  ...subscription,
};
