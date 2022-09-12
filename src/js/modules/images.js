import calcScroll from "./calcScroll";

const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");
  const scroll = calcScroll();

  imgPopup.classList.add("popup");
  imgPopup.append(bigImage);
  imgPopup.style.cssText = `
		display: none;
		justify-content: center;
		align-items: center;
	`;

  bigImage.style.height = `75vh`;

  workSection.append(imgPopup);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      bigImage.src = target.parentNode.getAttribute("href");
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    }

    if (target && target.matches(".popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = ``;
    }
  });
};

export default images;
