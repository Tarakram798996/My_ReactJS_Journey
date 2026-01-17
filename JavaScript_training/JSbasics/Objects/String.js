//String primitive
const message='This is my first message';

//String object
const another = new String('Hello');

console.log(message[0]);
console.log(message.length);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('first','second'));
console.log(message.toUpperCase());
console.log(message.trim());
console.log(message.split(' '));

//Escape notation
console.log('This is my \' first message');
console.log('This is my \nfirst message');
console.log('This is my        first message');