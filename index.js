const dropZone = document.querySelector(".drop-zone");
const browseBtn = document.querySelector(".browser-btn");
const fileInput = document.querySelector("#file");
const host = "https://inshare.herokuapp.com/";

const uploadURL = host+"api/files";

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();

  if (!dropZone.classList.contains("dragged")) {
    dropZone.classList.add("dragged");
  }
});
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragged");
  const files = e.dataTransfer.files;
  console.table(files);
  if (files.length) {
    fileInput.files = files;
  }
});

browseBtn.addEventListener("click", () => {
  fileInput.click();
});

const uploadFile = ()=>{
    const files = fileInput.files[0]
    const formData = new formData()
    formData.append("myfile",file);
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange =() =>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          console.log(xhr.response);
      }
    };
    xhr.open("POST", uploadURL);
    xhr.send(formData);
};
