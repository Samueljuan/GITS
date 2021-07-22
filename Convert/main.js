const convert = (time) => {
   const [conv, modifier] = time.split(' ');

   let [hours, minutes] = conv.split(':');

   if (hours === '12') {
      hours = '00';
   }

   if (modifier === 'PM') {
      hours = parseInt(hours) + 12;
   }

   return `${hours}:${minutes}`;
}


console.log(convert("01:00 PM"));
console.log(convert("12:00 PM"));
console.log(convert("12:00 AM"));
console.log(convert("10:00 AM"));