function toArray(input) {
  return input ? input : [];
}

function toString(input) {
  return input ? String(input) : "";
}

function toInt(input) {
  return input ? toInt(input) : 0;
}

module.exports = {
  toArray,
  toString,
  toInt,
};
