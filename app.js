let input = document.querySelector(".txt-input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const translate = (e) => {
  console.log(input.value);

  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      console.log(err);
      alert(`Error: ${err}`);
    });
};

btn.addEventListener("click", translate);
