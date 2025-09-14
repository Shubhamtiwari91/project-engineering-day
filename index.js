const tab_item = document.querySelectorAll(".tab_item");
const border = document.getElementById("border");
const moving_container = document.getElementById("moving_container");
const text_moving_wrapper = document.getElementById("text_moving_wrapper");
for (let i = 0; i < tab_item.length; i++) {
  tab_item[i].addEventListener("click", () => {
    border.style.transform = `translateX(${100 * i}%)`;
    moving_container.style.transform = `translateY(-${100 * i}%)`;
    text_moving_wrapper.style.transform = `translateY(-${100 * i}%)`;
  });
}
