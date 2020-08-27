const refs = {
  tags: document.querySelector(".js-tags")
};

const OnTagsClickHandle = event => {
  if (event.target.nodeName !== "BUTTON") {
    console.log("кликнули не по кнопке");
    return;
  }
  const currentActiveTag = event.currentTarget.querySelector(".js-active_tag");

  if (currentActiveTag) {
    currentActiveTag.classList.remove("js-active_tag");
  }
  const nextActive = event.target;
  nextActive.classList.add("js-active_tag");
};

refs.tags.addEventListener("click", OnTagsClickHandle);
