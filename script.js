function showPage(page){

document.querySelectorAll(".page").forEach(section=>{
section.classList.remove("active")
})

document.getElementById(page).classList.add("active")

}

const fileInput=document.getElementById("archivo")

if(fileInput){

fileInput.addEventListener("change",function(){

const maxSize=50*1024*1024

if(this.files[0] && this.files[0].size>maxSize){

alert("El archivo supera los 50MB permitidos")
this.value=""

}

})

}