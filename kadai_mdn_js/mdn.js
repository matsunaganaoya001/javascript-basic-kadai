const date1 = new Date (2023, 8 ,22);

const year = date1.getFullYear();
const month = date1.getMonth();
const day = date1.getDate();

const date2 = () => {
  console.log(year + '年' + month + '月' + day + '日');
}

date2();
