let value;

const now = new Date();
const date1 = new Date("7-10-2002 9:3:05");

const date2 = new Date("July 10 2002");

const date3 = new Date("10/7/2002");

value = date1;

value = date1.getDate();
value= date1.getFullYear();
value = date1.getMonth();

value = date1.getHours();
value = date1.getSeconds();
value = date1.getMinutes();
value = date1.getMilliseconds();


date1.setMonth(0);
date1.setDate(7);
date1.setFullYear(1999);
date1.setHours(3);
date1.setMinutes(43);
date1.setSeconds(20);

value = date1;



console.log(now);



console.log(value);