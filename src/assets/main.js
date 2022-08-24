const API = 'https://rickandmortyapi.com/api/character'
const content = null || document.getElementById('content')


const fetchData = async (urlAPI) => {

  try {
    const response = await fetch(urlAPI)
    const json = await response.json()
  
    return json

  } catch (error) {
    return error
  }
}


async function boardRicknMorty () {

  const personajes = await fetchData(API)

  try {
    let view = `${personajes.results.map(personaje => `
    <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src=${personaje.image} alt=${personaje.name} class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${personaje.name}
        </h3>
      </div>
    </div>
    `).slice(0,10).join('')}`
  
    content.innerHTML = view
    
  } catch (error) {
    let view = `<h1>Upsss! Ha ocurrido un error, recarga la pagia para volver a intentarlo</h1>`
    content.innerHTML = view
  }

}

boardRicknMorty()