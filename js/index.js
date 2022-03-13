"use strict";
const loadAdvice = async () => {
  try {
    const resp = await fetch("https://api.adviceslip.com/advice");
    if (resp.status === 200) {
      const data = await resp.json();
      console.log(data);
      document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
      document.getElementById("advice").innerHTML = `${data.slip.advice}`;
    } else {
      alert("An unexpected error ocurred, try again.");
    }
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => loadAdvice();
document.getElementById("button").addEventListener("click", loadAdvice);
