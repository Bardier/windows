import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const allForms = document.querySelectorAll("form");
  const allInputs = document.querySelectorAll("input");

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро с вами свяжемся.",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    allInputs.forEach((input) => {
      input.value = "";
    });
  };

  allForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute("data-calc") === "end") {
        for (const key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch((e) => {
          console.log(e);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();

          for (const key in state) {
            state[key] = "";
          }

          setTimeout(() => {
            statusMessage.remove();
            document.querySelector(".popup_calc_end").style.display = "none";
            document.body.style.overflow = "";
          }, 5000);
        });
    });
  });
};

export default forms;
