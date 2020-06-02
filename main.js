let header = document.querySelector("header");
let headerHeight = header.getBoundingClientRect().height;
let homeHeight = document.querySelector("#home").getBoundingClientRect().height;
let up = document.querySelector(".up");

document.addEventListener("scroll", () => {
	if (window.pageYOffset + 50 > homeHeight) {
		up.classList.add("visible");
		header.classList.add("fixed")
	} else {
		up.classList.remove("visible");
		header.classList.remove("fixed")
	}
})