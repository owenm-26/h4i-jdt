/* Project buttons */
const btnProject1 = document.getElementById("btnProject1");
const btnProject2 = document.getElementById("btnProject2");

btnProject1.addEventListener("click", function () {
  const targetUrl = "https://github.com/EthanL3/mock_investor";
  window.open(targetUrl, "_blank");
});

btnProject2.addEventListener("click", function () {
  const targetUrl = "https://github.com/AlexHack1/EC311-Final-Project";
  window.open(targetUrl, "_blank");
});

/* Profile icons */
const linkedinImg = document.getElementById("linkedin-img");
const githubImg = document.getElementById("github-img");

linkedinImg.addEventListener("click", function () {
  const targetUrl = "https://www.linkedin.com/in/ethan-levine-365785235";
  window.open(targetUrl, "_blank");
});

githubImg.addEventListener("click", function () {
  const targetUrl = "https://github.com/EthanL3";
  window.open(targetUrl, "_blank");
});
