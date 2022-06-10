const { readFileSync } = require("fs");

const typeDefs = readFileSync(__dirname + "/schema.graphql").toString("utf-8");

module.exports = typeDefs;
