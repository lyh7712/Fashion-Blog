const clock = document.querySelector('.clock');

let today = new Date().getTime();
let target = new Date('December 25, 2021, 0:00:00').getTime();

const targetDay = target - today;

const getDay = String(Math.ceil(targetDay / (1000 * 60 * 60 * 24))).padStart(
  2,
  '0'
);
const getHours = String(
  Math.ceil((targetDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
).padStart(2, '0');
const getMinutes = String(
  Math.ceil((targetDay % (1000 * 60 * 60)) / (1000 * 60))
).padStart(2, '0');
const getSeconds = String(Math.ceil((targetDay % (1000 * 60)) / 1000)).padStart(
  2,
  '0'
);

console.log(`${getDay}d ${getHours}h ${getMinutes}m ${getSeconds}s`);
  