console.log("hellooooo");

const input = document.getElementById("radius");
const hasil = document.querySelector("#hasil");
const btnHitung = document.querySelector("#hitung");
const btnReset = document.querySelector("#reset");

// fungsi tombol hitung
btnHitung.addEventListener("click", () => {
  const inputValue = input.value;
  const hasilAkhir = 3.14 * (inputValue * 2);
  hasil.innerHTML = `2 x π x r = 2 x 3,14 x ${inputValue} = ${hasilAkhir}`;
});

// funsi tombol reset
btnReset.addEventListener("click", () => {
  input.value = "";
  hasil.innerHTML = "";
});
