/*
 * This demo show how the default properties of the target
 * are called if no get handler method is implemented
 */
const target = {
  message1: "Hello",
  message2: "Everyone",
};

const handler = {};

const proxy = new Proxy(target, handler);

const getMessage1 = () => {
  console.log(proxy.message1);
  return proxy.message1;
};

const getMessage2 = () => {
  console.log(proxy.message2);
  return proxy.message2;
};

module.exports = { getMessage1, getMessage2 };
