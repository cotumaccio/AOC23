import data from './data/input.json';

console.time("Solution");

const convertToNumber = (literal: string): string => {
  let number: string = "";
  switch (literal) {
    case "one":
      number = "1";
      break;
    case "two":
      number = "2";
      break;
    case "three":
      number = "3";
      break;
    case "four":
      number = "4";
      break;
    case "five":
      number = "5";
      break;
    case "six":
      number = "6";
      break;
    case "seven":
      number = "7";
      break;
    case "eight":
      number = "8";
      break;
    case "nine":
      number = "9";
      break;
  }
  return number;
}

const checkString = (row: string): void => {
  console.log("Input:", row);
  const capturingRegex = /(?<literals>one|two|three|four|five|six|seven|eight|nine)|\*/gm;
  const found= row.match(capturingRegex);
  console.log("Founded:", found);

  let first: string = found[0];
  let last: string = found[found.length - 1];

  if ( row.startsWith(first) && row.endsWith(last) ) {
    // console.log("True");
    let computed: string = convertToNumber(first) + convertToNumber(last);
    console.log(computed);
  }
}

checkString(data.data[9]);

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