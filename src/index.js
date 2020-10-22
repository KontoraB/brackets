//check('()', [['(', ')']]) // -> true
//check('((()))()', [['(', ')']]) // -> true
//check('())(', [['(', ')']]) // -> false
//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
//check('[(])', [['(', ')'], ['[', ']']]) // -> false
//check('[]()', [['(', ')'], ['[', ']']]) // -> true
//check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

//check('||', [['|', '|']]) // -> true
//check('|()|', [['(', ')'], ['|', '|']]) // -> true
//check('|(|)', [['(', ')'], ['|', '|']]) // -> false
//check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

module.exports = function check(str, bracketsConfig) {
  // your solution
  //задаем образец - массив где пары (),[],{}, || служат элементами
  //
  let objBrackets  = Object.fromEntries(bracketsConfig);
  // задаем пустой массив
  let arr = [];  
  // разбиваем входящую строку на массив символов и перебираем его  
    for (let i of str.split('')) {
  // сравниваем значение i c первым элементом массива arr 
  // и если они равны то убираем элемент с массива arr    
        if (arr[0] === i) {
           arr.shift();
  // иначе сравниваем i элемент с образцом         
        } else if (objBrackets[i]) {
   // если да то добавляем элемент в массив arr       
          arr.unshift(objBrackets[i]);
  // если вообще не нашли совпадений возвращаем ложь
        } else {
            return false;
        }
    }   
    // если длина массива arr возвращаем истину 
    return arr.length === 0;
}
