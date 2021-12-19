const styleBtn = document.getElementById("button-remove");
const imgPanel = document.getElementById("image-flex");
const imgStroke = document.getElementById("image-none");
const refreshBtn=document.getElementById("refresh-button");

imgPanel.style.display = "flex";
imgStroke.style.display = "none";

styleBtn.addEventListener("click", () => {
  imgPanel.style.display = "none";
  imgStroke.style.display = "flex";
});
refreshBtn.addEventListener("click",()=>{
    imgPanel.style.display="flex"
    imgStroke.style.display="none"
})
