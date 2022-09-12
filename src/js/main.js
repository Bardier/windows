import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const modalState = {
    form: 1,
  };
  const deadLine = "Sep 12, 2023";

  // * ------------------------------------------------------------
  // * Подключение modals
  // * ------------------------------------------------------------

  modals(modalState);
  changeModalState(modalState);

  // * ------------------------------------------------------------
  // * Подключение tabs
  // * ------------------------------------------------------------

  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline"
  );

  // * ------------------------------------------------------------
  // * Подключение forms
  // * ------------------------------------------------------------

  forms(modalState);

  // * ------------------------------------------------------------
  // * Подключение timer
  // * ------------------------------------------------------------

  timer("#timer", deadLine);

  // * ------------------------------------------------------------
  // * Подключение images
  // * ------------------------------------------------------------

  images();
});
