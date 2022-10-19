function shoot(){
   document.querySelector(".bullet").style.display = "block"

   setTimeout(() =>{
    document.querySelector(".bullet").style.display = "none";

   }, 2000);
}
