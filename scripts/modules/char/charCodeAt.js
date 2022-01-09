//Turns letters into it's ASCII equivalent
export function charCodeAt(){
  let str = "Go Team";
  let ascii = 0;
  for (let i = 0; i < str.length; i++) {
    ascii += str.charCodeAt(i);
  }
  console.log("Usando .charCodeAt(i) nos devuelve en forma ascii : " + ascii);
}