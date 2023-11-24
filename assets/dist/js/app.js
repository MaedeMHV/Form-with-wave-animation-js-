let labels = document.querySelectorAll(".form_ctrl label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")

    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 25}ms " >${letter}</span>`
    )
    .join("");
  // let letters = label.innerText.split("");
  // let lettersInSpan = letters.map(
  //   (letter, index) =>
  //     `<span style="transition-delay:${index * 25}ms " >${letter}</span>`
  // );
  // label.innerHTML = lettersInSpan.join("");
});
// style="transition-delay:${index * 30}ms"
