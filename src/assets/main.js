const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCUm3Zwa99TvX5tvybESNCiA&hl=en&gl=US'
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abba6f849fmshf14b66c50ed68a0p1b9a09jsn6dab8a207d9e',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};


const fetchData = async (urlAPI, options) => {

  try {
    const response = await fetch(urlAPI, options)
    const json = await response.json()
  
    return json

  } catch (error) {
    return error
  }
}


async function boardRicknMorty () {

  const all = await fetchData(API, options)
  
  const videos = all.contents.filter(video => !video.video.title.includes('#SHORT'))
  console.log(videos)

  try {
    let view = `${videos.map(video => `
    <div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src=${video.video.thumbnails[0].url} alt=${video.video.title} class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-400">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.video.title}
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