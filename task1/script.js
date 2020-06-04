'use strict';
/*


Напишите класс StringBuilder(baseString) и добавьте ему следующий функционал.
Значение по умолчанию для параметра baseSgtring это пустая строка.
У экземпляра будет свойство value, в которое записывается значение параметра baseString.
Метод append(str) - получает парметр str (строку) и добавляет ее в конец свойства value.
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало свойства value.
Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец свойства
value.
*/

class StringBuilder {
  constructor (value) {
    this.value = value;
  }
  baseString () {
    return this.value;
  }
  append (str) {
    const result = this.value + str;
    this.value = result;
    return this;
  }
  prepend (str) {
    const result = str + this.value;
    this.value = result;
    return this;
  }
  pad (str) {
    const result = str + this.value + str;
    this.value = result;
    return this;
  }
}

const builder = new StringBuilder('.');
builder.append('^').prepend('^').pad('=');

console.log(builder.value);

