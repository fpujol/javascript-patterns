/*
 * This method show a mix of using get method using reflection
 * to read the property or not
 */
const target = {
  message1: "Hello",
  message2: "Everyone",
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === "message2") {
      return "World!";
    }
    console.log(arguments);
    return Reflect.get(...arguments);
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

module.exports = { getMessage1, getMessage2 };
