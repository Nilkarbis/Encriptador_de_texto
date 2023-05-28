const diccionario = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
}

function encriptar (string) {
  string = string.toLowerCase()
  let result = ''
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    for (const vocal in diccionario) {
      if (char === vocal) {
        result += diccionario[vocal]
        break
      }
    }
    if (!Object.keys(diccionario).includes(char)) {
      result += char
    }
  }
  return result
}

function desencriptar (string) {
  string = string.toLowerCase()
  let result = ''
  for (const vocal in diccionario) {
    result = string.replaceAll(diccionario[vocal], vocal)
    string = result
  }
  return result
}
/* ------------------------------------------------------------------------------------------- */
const input = document.querySelector('textarea')

const botonEncriptar = document.querySelector('#Encriptar')

const botonDesencriptar = document.querySelector('#Desencriptar')

const noresultado = document.querySelector(".noresultado")
const result = document.querySelector(".result")
const resultText = document.querySelector(".resultText")
const copiar = document.querySelector("#copiar")

/* evento de encriptar */
botonEncriptar.addEventListener('click', () => {
  const value = input.value
  if (value) {
    const encriptado = encriptar(value)
    input.value = ''
    result.style.display = "flex"
    noresultado.style.display = "none"
    resultText.innerText = encriptado
  }
})

/* evento de desencriptar */
botonDesencriptar.addEventListener('click', () => {
  const value = input.value
  if (value) {
    const desencriptado = desencriptar(value)
    input.value = ''
    noresultado.style.display= "none"
    result.style.display= "flex"
    resultText.innerText= desencriptado
  }
})

copiar.addEventListener("click", () => {
  navigator.clipboard.writeText(resultText.innerText)
  .then(() => {
    copiar.innerText="Copiado"
    setTimeout(() =>{
    copiar.innerText="Copiar"
    }, 1500)
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
})