/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let result = 0;
    let i = start % 2 === 0 ? start : (start += 1);
    for (; i <= end; i += 2) result += i;
    return result;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let result = 0;
    while (a > 0.1) {
        a /= 2;
        result++;
    }
    return result;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let result = '';
    let i = 0;
    if (message.length === 0) return result;
    do {
        result += (i + 1) % 3 === 0 ? '_' : message[i];
        i++;
    } while (i < message.length);
    return result;
}
