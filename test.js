const date = new Date()
const options = { timeZone: 'Asia/Dhaka' };
const bangladeshTime = date.toLocaleString('en-US', options);
console.log(bangladeshTime);