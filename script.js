document.addEventListener("DOMContentLoaded", () => {
  const spanResultSpan = document.querySelector(".container span");
  const spanPlaceholder = document.querySelector(".span-placeholder");
  const divResultSpan = document.querySelector(".result-div");
  const divPlaceholder = document.querySelector(".div-placeholder");
  const btn = document.querySelector(".btn");

  async function fetchData() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      spanPlaceholder.style.display = "none";
      spanResultSpan.textContent = `ADVICE #${data.slip.id}`;

      divPlaceholder.style.display = "none";
      divResultSpan.textContent = data.slip.advice;

      setTimeout(() => {
        btn.classList.remove("loading");
      }, 2000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();

  btn.addEventListener("click", () => {
    if (!btn.classList.contains("loading")) {
      btn.classList.add("loading");
      spanPlaceholder.style.display = "block";
      spanResultSpan.textContent = "";

      divPlaceholder.style.display = "block";
      divResultSpan.textContent = "";
      fetchData();
    }
  });
});
