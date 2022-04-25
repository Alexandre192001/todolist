document.getElementById("btn-cadastrar").addEventListener("click",()=>{
  let nome = document.getElementById("input-name").value;
  if(nome==""){
    alert("Preencha o campo principal")

  } else{
    let element = document.createElement("li");
    
    element.innerHTML=`
    ${nome}

    `
    let remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "X"
    remove.setAttribute("onclick","removerItem(this)");
    remove.style.width ="30px"
    remove.style.border = "none"
    remove.style.backgroundColor = "#000"
    remove.style.color = "red"
    remove.style.height  ="1.4rem"
    remove.style.borderRadius = ".4rem  "
    element.appendChild(remove)
    document.querySelector(".resultado").appendChild(element)
    document.getElementById("input-name").value=""
  }
})
function removerItem(remover){
  let removendoItem = remover.parentNode;
  document.querySelector(".resultado").removeChild(removendoItem)
}

