export class Mascota{
  static count = 0
  #id = 0
  tipo = "Canido"
  name = "Desconocido"
  microchip = ""
  gender = "f"
  age = 0

  constructor(tipo = "Canido",name = "Desconocido",microchip = "",gender = "f",edad = 0){
    this.#id=++this.constructor.count
    this.tipo=tipo
    this.name=name
    this.microchip=microchip
    this.gender=gender
    this.age=edad
  }
  
  getData(){
    return `<ul>
      <li>${this.#id}</li>
      <li>${this.tipo}</li>
      <li>${this.name}</li>
      <li>${this.microchip}</li>
      <li>${this.gender}</li>
      <li>${this.age}</li>
    </ul>`
  }

  setName(name){
    this.name=name
  }
  
  setAge(age){
    this.age=age
  }
}