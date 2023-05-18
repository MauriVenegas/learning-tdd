// Escribir una función que al pasarle un número:
//   - Muestra "fizz" si es múltiplo de 3.
//   - Muestra "buzz" si es múltiplo de 5.
//   - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
//   - Muestra el número si no es múltiplo de ninguno de los anteriores.
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error ("Parameter provider must be a number");
  if (Number.isNaN(number)) throw new Error ("Parameter provider must be a number");

  const multiplies = {3: "fizz", 5: "buzz"};
  let output = "";

  // Refactorizado
  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word // output = output + word;
    });
  return output === "" ? number : output;

  // Sin refactorizar
  // if (number % 3 === 0 && number % 5 === 0 ) return "fizzbuzz";
  // if (number % 3 === 0) return "fizz";
  // if (number % 5 === 0) return "buzz";
  // return number;
};