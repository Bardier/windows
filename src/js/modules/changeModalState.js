import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");

  const popupCalcButton = document.querySelector(".popup_calc_button");
  const popupCalcProfileButton = document.querySelector(
    ".popup_calc_profile_button"
  );

  checkNumInputs("#width");
  checkNumInputs("#height");
  popupCalcButton.disabled = true;
  popupCalcProfileButton.disabled = true;

  const bindActionsToElem = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i + 1;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              state[prop] = i === 0 ? "cold" : "warm";
              elem.forEach((box, j) => {
                box.checked = false;
                if (j === i) box.checked = true;
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }

        if (state.form && state.width && state.height) {
          popupCalcButton.disabled = false;
        } else {
          popupCalcButton.disabled = true;
        }

        if (state.type && state.profile) {
          popupCalcProfileButton.disabled = false;
        } else {
          popupCalcProfileButton.disabled = true;
        }
        console.log(state);
      });
    });
  };

  bindActionsToElem("click", windowForm, "form");
  bindActionsToElem("input", windowWidth, "width");
  bindActionsToElem("input", windowHeight, "height");
  bindActionsToElem("change", windowType, "type");
  bindActionsToElem("change", windowProfile, "profile");
};

export default changeModalState;
