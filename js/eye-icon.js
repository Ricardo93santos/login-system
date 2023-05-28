"use strict"
window.addEventListener("load", addEventos)

function addEventos(){
  const openEye = document.querySelector('#open-eye')
  const closeEye = document.querySelector('#close-eye')
  let inputPass = document.querySelector('#password')

  openEye.addEventListener("click", showPass)
  closeEye.addEventListener("click", hidePass)

  function showPass(){
    inputPass.setAttribute("type", "text")
    closeEye.style.display = "block"
    openEye.style.display = "none"
  }

  function hidePass(){
    inputPass.setAttribute("type", "password")
    openEye.style.display = "block"
    closeEye.style.display = "none"
  }
}