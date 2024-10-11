console.log("hellooooo");

const input = document.getElementById("radius");
const button = document.querySelector("button");
const hasil = document.querySelector("#hasil");
button.addEventListener("click", () => {
  const inputValue = input.value;
  const hasilAkhir = 3.14 * (inputValue * 2);
  hasil.innerHTML = `2 x π x r = 2 x 3,14 x ${inputValue} = ${hasilAkhir}`;
});
