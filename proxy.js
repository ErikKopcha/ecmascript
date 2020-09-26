// клас, позв добавлять ловушки на обьектЬІ

class validator {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} нет`;
  }
  
  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(`Длина должна бЬІть больше 2 символов`);
    }
  }
}

const form = {
  login: 'tester',
  password: '12345'
};

const formProxy = new Proxy(form, validator);

console.log(formProxy.login);
console.log(formProxy.password);
console.log(formProxy['username']);