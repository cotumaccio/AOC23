// import './style.css';
import data from './input.json';

console.time("Solution");

const extractNumbers = (row: string): number => {
  let matches = row.match(/\d+/g);
  // console.log("Input row:", row);
  // console.log("Matched:", matches);
  let matched: string = matches.join('');
  // console.log("Joined:", matched);
  let first: string = matched.substring(0, 1);
  // console.log("First:", first);
  let last: string = matched.substring(matched.length - 1);
  // console.log("Last:", last);
  let composed: string = first + last;
  let num: number = Number(composed);
  // console.log("Composed:", num);

  // console.log(typeof(num));

  return num;
}

extractNumbers(data.data[10]);

var total: number = 0;

data.data.forEach((row: string): void => {
  // console.log("Loop:", extractNumbers(row));
  total += extractNumbers(row);
  // console.log("Total:", total);
})

console.log("Total:", total);
console.timeEnd("Solution");

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = message('Welcome');