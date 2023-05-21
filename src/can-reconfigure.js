// Explicación del ejeercicio: https://2021.adventjs.dev/challenges/23

export const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error("from is not a string");
  if (typeof to !== "string") throw new Error("to is not a string");

  if (from.length !== to.length) return false;
  if (new Set(from).size !== new Set(to).size) return false;

  const transformations = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformations[fromLetter];
    if (storedLetter && storedLetter !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  }
  return true;
};
