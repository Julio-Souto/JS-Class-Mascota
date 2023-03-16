export class Mascota{
  #id = 0
  tipo = "Canido"
  name = "Desconocido"
  microchip = ""
  gender = "f"
  age = 0

  /**
   * 
   * @param {*} tipo 
   * @param {*} name 
   * @param {*} microchip 
   * @param {*} gender 
   * @param {*} edad 
   */
  constructor(tipo = "Canido",name = "Desconocido",microchip = "",gender = "f",edad = 0){
    this.#id=this.uniqueId()
    this.tipo=tipo
    this.name=name
    this.microchip=microchip
    this.gender=gender
    this.age=edad
  }
  
  getData(){
    return `<ul style="text-align:left;">
      <li>ID: ${this.getId()}</li>
      <li>Type: ${this.tipo}</li>
      <li>Name: ${this.name}</li>
      <li>Microchip: ${this.microchip}</li>
      <li>Gender: ${this.gender}</li>
      <li>Age: ${this.age}</li>
    </ul>`
  }

  getObject(){
    return {
      ...this,
      id: this.getId()
    }
  }

  getId(){
    return this.#id
  }

  uniqueId(){
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString().substring(0,10)
  }

  setName(name){
    this.name=name
  }
  
  setAge(age){
    this.age=age
  }
}

export class Perro extends Mascota{
  raza=""
  peso=0
  alimentacion=""
  
  constructor(tipo = "Canido",name = "Desconocido",microchip = "",gender = "f",edad = 0, raza="Carlino", peso="10", alimentacion=""){
    super(tipo,name,microchip,gender,edad)
    this.raza=raza
    this.peso=peso
    this.alimentacion=alimentacion
  }

  getData(){
    return `<ul style="text-align:left;">
      <li>ID: ${this.getId()}</li>
      <li>Type: ${this.tipo}</li>
      <li>Name: ${this.name}</li>
      <li>Microchip: ${this.microchip}</li>
      <li>Gender: ${this.gender}</li>
      <li>Age: ${this.age}</li>
      <li>Raza: ${this.raza}</li>
      <li>Peso: ${this.peso}</li>
      <li>Alimentacion: ${this.alimentacion}</li>
    </ul>`
  }

  getObject(){
    return {
      ...this,
      id: this.getId()
    }
  }
}