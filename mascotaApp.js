import { Mascota, Perro } from "./Mascota"
import form from "./form-mascota.html?raw"

export function mascotaApp (element){
  let texthtml = form
  element.innerHTML+=texthtml
  let formMascota = document.getElementById("form-mascota") 
  formMascota.addEventListener("submit", (e) => {
    e.preventDefault()
    let type = formMascota.type.value
    let name = formMascota.name.value
    let microchip = formMascota.microchip.value
    let gender = formMascota.gender.value
    let age = formMascota.age.value
    let raza = formMascota.raza.value
    let alimentacion = formMascota.alimentacion.value
    let peso = formMascota.peso.value
    let mascota = null
    if(notEmpty(type)&&notEmpty(name)&&notEmpty(microchip)&&notEmpty(gender)&&notEmpty(age))
      mascota = new Mascota(type.trim(),name.trim(),microchip.trim(),gender,age)
    else
      mascota = new Mascota()
    let perro
    if(notEmpty(raza)&&notEmpty(alimentacion)&&notEmpty(peso))
      perro = new Perro(type,name,microchip,gender,age,raza,peso,alimentacion)
    else
      perro = new Perro()
    document.getElementById("content").innerHTML += mascota.getData()
    document.getElementById("content").innerHTML += perro.getData()
  }) 
  document.getElementById("range-edad").addEventListener("input", (e) => {
    let edad = e.currentTarget.value
    document.getElementsByName("age")[0].value = edad
  })
  document.getElementById("select").addEventListener("change", () => {
    if(document.getElementById("select").value === "perro")
      document.getElementById("perro").classList.remove("oculto")
    else
      document.getElementById("perro").classList.add("oculto")
  })
}

function notEmpty(element){
  return ((element === null || element === "") && (typeof(element) !== 'string' || typeof(element) !== 'number') ? false : true)
}