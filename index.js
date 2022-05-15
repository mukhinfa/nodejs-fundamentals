console.log('__dirname >> ', __dirname);
console.log('__filename >>', __filename);
const obj = require('./user');
console.log('Obj =>> ', obj.user);
obj.sayHello();