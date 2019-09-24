const weatherForm = document.forms[0],
      btn = weatherForm.querySelector('button')

const APIKEY = '1d4a565db63b700f30a6fd3b47691722'

const getWeather = async evt => {
  evt.preventDefault()

  const city = weatherForm.elements.namedItem('city').value
  const weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`)
  const data = await weatherUrl.json()

  
  const weatherBlock = document.createElement('div')
  weatherBlock.className = 'weather-wrapper'

  const cityName = document.createElement('p'),
        cityTemp = document.createElement('div'),
        tempCount = document.createElement('p'),
        tempSymb = document.createElement('span'),
        cityHum = document.createElement('p'),
        cityWind = document.createElement('p'),
        cityPres = document.createElement('p'),
        img = document.createElement('img')

  cityName.textContent = data.name
  weatherBlock.append(cityName)

  const horizontalLine = document.createElement('hr')
  weatherBlock.append(horizontalLine)

  cityTemp.className = 'city-temp'
  tempCount.textContent = `${Math.round(data.main.temp)}`
  tempSymb.textContent = '℃'
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  cityTemp.append(tempCount)
  cityTemp.append(tempSymb)
  cityTemp.append(img)
  weatherBlock.append(cityTemp)

  cityHum.className = 'city-hum'
  cityHum.textContent = `${data.main.humidity} %`
  weatherBlock.append(cityHum)

  cityWind.className = 'city-wind'
  cityWind.textContent = `${Math.round(data.wind.speed)} m/s`
  weatherBlock.append(cityWind)

  cityPres.className = 'city-pres'
  cityPres.textContent = `${data.main.pressure} mmHg`
  weatherBlock.append(cityPres)

  const clear = () => {
    const weatherBlocks = document.querySelectorAll('.weather-wrapper')
    weatherBlocks.forEach(eachBlock => eachBlock.remove())
  }
  
  clear()

  weatherForm.after(weatherBlock)
  console.log(data)
}


btn.addEventListener('click', getWeather)