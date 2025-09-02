///map , filter, reduce

const array = [1, 2, 3, 4, 5, 6];

//map functions

function double(x) {
  return x * 2;
}
function tripple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const newData = array?.map(binary);

module.exports = newData;
