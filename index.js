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

const resultSection = document.querySelector('section')
/* funcion que retorna el html del resultado */
function renderResultHtml (value) {
  return `<div class="result">
  <p>${value}</p>
  <button type="button" id="copiar">Copiar</button>
  </div>`
}
/* evento de encriptar */
botonEncriptar.addEventListener('click', () => {
  const value = input.value
  if (value) {
    const encriptado = encriptar(value)
    resultSection.innerHTML = renderResultHtml(encriptado)
    input.value = ''
  }
})

/* evento de desencriptar */
botonDesencriptar.addEventListener('click', () => {
  const value = input.value
  if (value) {
    const desencriptado = desencriptar(value)
    resultSection.innerHTML = renderResultHtml(desencriptado)
    input.value = ''
  }
})
