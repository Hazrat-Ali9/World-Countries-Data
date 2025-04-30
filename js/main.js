/* === GLOBAL VARIABLES === */
let nameFlag = true
let capitalFlag = false
let populationFlag = false

/* === Getting HTML elements === */
const countriesWrapper = document.querySelector('.countries-wrapper')
const graphWrapper = document.querySelector('.graph-wrapper')
const subtitle = document.querySelector('.subtitle')
const searchInput = document.querySelector('.search-input')
const buttons = document.querySelector('.buttons')
const feedback = document.querySelector('.feedback')
const graphButtons = document.querySelector('.graph-buttons')
const graphTitle = document.querySelector('.graph-title')

/* === Sorting icons === */
const nameIcon = document.querySelector('.name i')
const capitalIcon = document.querySelector('.capital i')
const populationIcon = document.querySelector('.population i')

/* Create a single country UI*/
const createCountryUI = ({ name, capital, languages, population, flag }) => {
  const formatedCapital =
   capital && capital.length > 0 ? `<span>Capital: </span>${capital}` : ''
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  return `<div class="country">
            <div class="country_flag">
              <img src="${flag}" />
            </div>
            <h3 class="country_name">${name.toUpperCase()}</h3>
            <div class="country_text">
              <p>${formatedCapital}</p>
              <p><span>${formatLanguage}: </span>${languages.join(', ')}</p>
              <p><span>Population: </span>${population.toLocaleString()}</p>
            </div>
        </div>`
}

/* === Filter countries based on search input === */
const filterCountries = (arr, search) => {
  let searchTerm = search.toLowerCase()
  const filteredCountries = arr.filter(country => {
    const { name, capital, languages } = country
    const isName = name.toLowerCase().includes(searchTerm)
    const isCapital = capital && capital.toLowerCase().includes(searchTerm)
    const isLanguages = languages
      .join()
      .toLowerCase()
      .includes(searchTerm)

    return isName || isCapital || isLanguages
  })
  const result = search == '' ? arr : filteredCountries
  return result
}

/* === Render  all the countries on the countries wrapper div */
const renderCountries = arr => {
  let contents = ''
  arr.forEach(country => (contents += createCountryUI(country)))
  countriesWrapper.innerHTML = contents
}

/* === Sorting countries either by name, capital or population === */
const sortCountries = (arr, type) => {
  const countries = [...arr]
  const sortedCountries = countries.sort((a, b) => {
    if (a[type] > b[type]) return -1
    if (a[type] < b[type]) return 1
    return 0
  })
  return sortedCountries
}

/* === Reverse countries array === */
const reverseCountries = arr => {
  const countries = [...arr]
  return countries.reverse()
}

/* create bar graph for language */
const countLanguages = arr => {
  const langs = []
  const langObj = []
  const langSet = new Set()
  arr.forEach(country => {
    let { languages } = country
    for (const language of languages) {
      langs.push(language)
      langSet.add(language)
    }
  })
  for (const language of langSet) {
    const countries = langs.filter(lang => lang == language).length
    langObj.push({ language, countries })
  }
  return langObj
}

/*=== Ten most populated countries ===*/
const mostPopulatedCountries = sortCountries(countries, 'population').slice(
  0,
  10
)

/*=== Ten most spoken language by region or by location ===*/
const mostSpokenLanguages = sortCountries(
  countLanguages(countries),
  'countries'
).slice(0, 10)

/*=== Shows a down arrow ===*/
function showArrowDown(e) {
  e.target.childNodes[1].classList.remove('fa-long-arrow-alt-up')
  e.target.childNodes[1].classList.add('fa-long-arrow-alt-down')
}

/*=== Shows an up arrow ===*/
function showArrowUp(e) {
  e.target.childNodes[1].classList.remove('fa-long-arrow-alt-down')
  e.target.childNodes[1].classList.add('fa-long-arrow-alt-up')
}

/* Display an up or down side icon, when a button is clicked */
function displayIcon(type) {
  if (type === 'name') {
    nameIcon.style.display = 'inline-block'
    populationIcon.style.display = 'none'
    capitalIcon.style.display = 'none'
  } else if (type === 'capital') {
    nameIcon.style.display = 'none'
    populationIcon.style.display = 'none'
    capitalIcon.style.display = 'inline-block'
  } else if (type === 'population') {
    nameIcon.style.display = 'none'
    capitalIcon.style.display = 'none'
    populationIcon.style.display = 'inline-block'
  } else {
  }
}

/*=== Event listener for name, capital, and statistics === */
buttons.addEventListener('click', e => {
  let type = e.target.className
  let sortedCountries
  switch (type) {
    case 'name':
      displayIcon(type)
      sortedCountries =
        searchInput.value === ''
          ? reverseCountries(countries)
          : sortCountries(filterCountries(countries, searchInput.value), type)
      if (nameFlag) {
        nameFlag = false
        showArrowUp(e)
        renderCountries(sortedCountries)
      } else {
        showArrowDown(e)
        const copiedsortedCountries = [...sortedCountries]
        const reversed = reverseCountries(copiedsortedCountries)
        renderCountries(reversed)
        nameFlag = true
      }
      break
    case 'capital':
      displayIcon(type)
      sortedCountries =
        searchInput.value === ''
          ? sortCountries(countries, type)
          : sortCountries(filterCountries(countries, searchInput.value), type)
      if (capitalFlag) {
        capitalFlag = false
        showArrowUp(e)
        renderCountries(sortedCountries)
      } else {
        capitalFlag = true
        showArrowDown(e)
        const copiedsortedCountries = [...sortedCountries]
        const reversed = reverseCountries(copiedsortedCountries)
        renderCountries(reversed)
      }
      break
    case 'population':
      displayIcon(type)
      sortedCountries =
        searchInput.value === ''
          ? sortCountries(countries, type)
          : sortCountries(filterCountries(countries, searchInput.value), type)
      if (populationFlag) {
        populationFlag = false
        showArrowUp(e)
        renderCountries(sortedCountries)
      } else {
        populationFlag = true
        showArrowDown(e)
        let copiedsortedCountries = [...sortedCountries]
        let reversed = reverseCountries(copiedsortedCountries)
        renderCountries(reversed)
      }
      break
    default:
      break
  }
})

/*=== Event listener to get search input === */
searchInput.addEventListener('input', function(e) {
  let searchTerm = e.target.value
  let countryOrCountries =
    filterCountries(countries, searchTerm).length > 1 ? 'countries' : 'country'
  feedback.innerHTML =
    searchInput.value != ''
      ? `<strong><b>${
          filterCountries(countries, searchTerm).length
        }</b></strong> ${countryOrCountries} satisfied the search criteria`
      : ''
  renderCountries(filterCountries(countries, searchTerm))
  if (searchInput.value != '') {
    graphTitle.textContent = 'World Population '
    renderPopulationGraph(filterCountries(countries, searchTerm))
  } else {
    graphTitle.textContent = '10 Most populated countries'
    renderPopulationGraph(mostPopulatedCountries)
  }
})

subtitle.textContent = `Currently, we have ${countries.length} countries`
renderCountries(filterCountries(countries, searchInput.value))

const createPopulationUI = ({ name, population }) => {
  const worldPopulation = 7693165599 // World population
  let formatedName
  if (name == 'Russian Federation') formatedName = 'Russia'
  else if (name === 'United States of America') formatedName = 'USA'
  else formatedName = name

  const width = Math.round((population / worldPopulation) * 100)
  return `<div class="bars" >
            <div>${formatedName}</div>
            <div class="bar" style="width:${width}%;height:35px;"></div>
            <div>${population.toLocaleString()}</div>
          </div>`
}

const renderPopulationGraph = arr => {
  let world = { name: 'World', population: 7693165599 }
  let content = ''
  content += createPopulationUI(world)
  arr.forEach(country => (content += createPopulationUI(country)))
  graphWrapper.innerHTML = content
}
const createLanguagesUI = ({ language, countries }) => {
  return `<div class="bars">
            <div>${language}</div>
            <div class="bar" style="width:${countries}%;height:35px;"></div>
            <div>${countries}</div>
          </div>`
}

const renderLanguagesGraph = arr => {
  let content = ''
  arr.forEach(country => (content += createLanguagesUI(country)))
  graphWrapper.innerHTML = content
}

graphTitle.textContent = '10 Most populated countries in the world'
renderPopulationGraph(mostPopulatedCountries)

graphButtons.addEventListener('click', e => {
  const className = e.target.className
  if (className === 'population') {
    graphTitle.textContent = '10 Most populated countries in the world'
    renderPopulationGraph(mostPopulatedCountries)
  } else if (className === 'languages') {
    graphTitle.textContent = '10 Most Spoken languages in the world'
    renderLanguagesGraph(mostSpokenLanguages)
  } else {
  }
})

