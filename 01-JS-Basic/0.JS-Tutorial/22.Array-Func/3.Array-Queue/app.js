let shedule = ['good morning'];
let count = shedule.push('good afternoon', 'good eve');
console.log(count);//3
console.log(shedule);//['good morning','good afternoon', 'good eve']

let firstMeal = shedule.shift();
console.log(firstMeal);//good morning
console.log(shedule);//['good afternoon','good evening']

shedule.unshift('breakfast');
console.log(shedule);//['breakfast', 'good afternoon', 'good eve']
