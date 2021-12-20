/*
 * This demo demostrate how the handlers are called when
 * you want ro read the message1 and message2 properties
 */
const target = {
  message1: "Hello",
  message2: "Everyone",
};

const handler = {
  get: function (target, prop, receiver) {
    return "World!";
  },
};

const proxy = new Proxy(target, handler);

const getMessage1 = () => {
  console.log(proxy.message1);
  return proxy.message1;
};

const getMessage2 = () => {
  console.log(proxy.message2);
  return proxy.message2;
};

//Methond handler2 get will be called
module.exports = { getMessage2, getMessage1 };
