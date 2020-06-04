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
    return this.value;
  }
  prepend (str) {
    const result = str + this.value;
    this.value = result;
    return this.value;
  }
  pad (str) {
    const result = str + this.value + str;
    this.value = result;
    return this.value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^'); 
console.log(builder.baseString()); // '.^'

builder.prepend('^'); 
console.log(builder.baseString()); // '^.^'

builder.pad('='); 
console.log(builder.baseString()); // '=^.^='
