import { Mascota } from "./Mascota"
import form from "./form-mascota.html?raw"

export function mascotaApp (element){
  let texthtml = form
  element.innerHTML+=texthtml
  document.getElementById("form-mascota").addEventListener("submit", (e) => {
    e.preventDefault()
    let type = document.getElementsByName("type")[0].value
    let name = document.getElementsByName("name")[0].value
    let microchip = document.getElementsByName("microchip")[0].value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let age = document.getElementsByName("age")[0].value
    let mascota = null
    if(notEmpty(type)&&notEmpty(name)&&notEmpty(microchip)&&notEmpty(gender)&&notEmpty(age))
      mascota = new Mascota(type,name,microchip,gender,age)
    else
      mascota = new Mascota()
    document.getElementById("form-mascota").innerHTML += mascota.getData()
  }) 
  document.getElementById("range-edad").addEventListener("input", (e) => {
    let edad = e.currentTarget.value
    document.getElementsByName("age")[0].value = edad
  })
}

function notEmpty(element){
  return ((element === null || element === "") && (typeof(element) !== 'string' || typeof(element) !== 'number') ? false : true)
}