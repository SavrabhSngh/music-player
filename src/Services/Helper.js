export const getDuration = (string, pad, length) => {
  return (new Array(length + 1).join(pad) + string).slice(-length);
};

export const changeActiveElem = (param) => {
  const id = localStorage.getItem("_id");
  if (id) {
    const activeElement = document.getElementsByClassName(`element-${id}`)[0];
    activeElement && activeElement.classList.remove("active");
  }
  const element = document.getElementsByClassName(`element-${param}`)[0];
  if (element) {
    element.classList.add("active");
    localStorage.setItem("_id", param);
  }
};
