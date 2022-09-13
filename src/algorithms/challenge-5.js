const filterList = (list) => {
  const numArr = [];
  for (let i = 0; i < list.length; i++) {
    if (Boolean(+list[i] + 1)) numArr.push(+list[i]);
  }
  return numArr;
};

module.exports = filterList;
