const repository = require("../repository");

module.exports = {
  Query: {
    sites: () => repository.site.getAll(),
    rtus: () => repository.rtu.getAll(),
  },
};
