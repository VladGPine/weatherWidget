const weatherForm = document.forms[0],
      btn = weatherForm.querySelector('button')

const APIKEY = '1d4a565db63b700f30a6fd3b47691722'

const getWeather = async evt => {
  evt.preventDefault()

  const city = weatherForm.elements.namedItem('city').value
  const weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
  const data = await weatherUrl.json()
  console.log(data)
}


btn.addEventListener('click', getWeather)