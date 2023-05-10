export const selectLang = {
  select() {
    let dropdown = document.querySelector(".dropdown");

    // Скрытие меню при клике вне его
    window.addEventListener("click", function (event) {
      if (!event.target.matches(".dropbtn")) {
        let dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });

    // Показ меню при клике на кнопку
    let dropbtn = dropdown.querySelector(".dropbtn");
    dropbtn.addEventListener("click", function () {
      let dropdownContent = dropdown.querySelector(".dropdown-content");
      if (!dropdownContent.classList.contains("show")) {
        dropdownContent.classList.add("show");
      } else {
        dropdownContent.classList.remove("show");
      }
    });

    // Обновление текста кнопки при выборе языка
    let dropdownLinks = dropdown.querySelectorAll(".dropdown-content a");
    for (let i = 0; i < dropdownLinks.length; i++) {
      dropdownLinks[i].addEventListener("click", function () {
        dropbtn.textContent = this.textContent;
      });
    }
  },
};
