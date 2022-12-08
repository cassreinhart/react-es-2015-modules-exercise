import fruits from './fruits';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please!`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! Can I have another?');

let remaining = remove(fruit, fruits);

console.log(`Sorry, we're all out. We have ${new Set(fruits)} left.`)