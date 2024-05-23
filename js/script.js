import { nextSlider } from "./banner.js";
import { prevSlider } from "./banner.js";
import { enviarNews } from "./news.js";
import { ativar } from "./menu.js";

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);

ativar();