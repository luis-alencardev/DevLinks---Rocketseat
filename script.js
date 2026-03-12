function toggleMode(){
    const html= document.documentElement
    html.classList.toggle ("light")
   // if (html.classList.contains ("light")){
   //     html.classList.remove ("light")
   // }else {
   //     html.classList.add("light")
   // }

   const img= document.querySelector("#profile img")
       if (html.classList.contains ("light")){
        img.setAttribute ("src","./assets/avatar-light.png")
    }else {
        img.setAttribute ("src","./assets/avatar.png")
    }

       if (html.classList.contains ("light")){
        img.setAttribute ("alt","foto do maik brito com oculos escuro")
    }else {
        img.setAttribute ("alt","Foto de Mayk Brito sorrindo usando oculos com fundo amarelo")
    }
}
