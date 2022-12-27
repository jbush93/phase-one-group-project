const url = 'https://api.spacexdata.com/v5/launches'
const flightName = document.querySelector('#cake-name')
const flightImg = document.querySelector('#cake-image')
const flightDescription = document.querySelector('#cake-description')
// const cakeReviews = document.querySelector('#review-list li')
const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')

const nav = document.querySelector('#cake-list')
const form = document.querySelector('#review-form')
let flightArr
let currentFlight
let previousFlight

function fetchAll()
{
    fetch(url)
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            flightArr = data
            currentFlight = flightArr[0].flight_number
            // previousFlight = 
            data.map(function (launchData) 
            {
                renderData(launchData)
            })

            flightDetail(flightArr[0])

        })
}

function renderData(launch)
{
    const newLI = document.createElement('li');
    newLI.innerText = launch.name;
    // newLI.innerText += ` - ${launch.date_local}`
    console.log(`Mission Name: ${launch.name} | Launch Date: ${launch.date_local} | Rocket: ${launch.rocket} | Flight Number: ${launch.flight_number}`)
    nav.append(newLI)

    newLI.addEventListener('click', function (evt)
    {
        evt.preventDefault()
        flightName.innerText = `${launch.name} - Mission Success: ${launch.success}`
        flightDescription.innerText = `Mission Name: ${launch.name} | Launch Date: ${launch.date_local} | Rocket: ${launch.rocket} | Details: ${launch.details} | Flight Number: ${launch.flight_number}`
        flightImg.src = launch.links.patch.small

        currentFlight = launch.flight_number
        console.log(`current flight: ${currentFlight} | array number: ${currentFlight - 1}`)
        previousFlight = currentFlight - 2
        console.log(`Previous flight array number: ${previousFlight}`)
        // console.log(launch[currentFlight])
        // console.log(launch[0])
    })

}

function flightDetail(launchData)
{
    flightName.innerText = `${launchData.name} - Mission Success: ${launchData.success}`
    flightDescription.innerText = `Mission Name: ${launchData.name} | Launch Date: ${launchData.date_local} | Rocket: ${launchData.rocket} | Details: ${launchData.details} | Flight Number: ${launchData.flight_number}`
    flightImg.src = launchData.links.patch.small
}

document.addEventListener('DOMContentLoaded', function (evt)
{
    evt.preventDefault()
    fetchAll()
    // form.addEventListener('submit', submitForm)
    previousBtn.addEventListener('click', function ()
    {
        console.log(flightArr[previousFlight].name)
        flightName.innerText = `${flightArr[previousFlight].name} - Mission Success: ${flightArr[previousFlight].success}`
        flightDescription.innerText = `Mission Name: ${flightArr[previousFlight].name} | Launch Date: ${flightArr[previousFlight].date_local} | Rocket: ${flightArr[previousFlight].rocket} | Details: ${flightArr[previousFlight].details} | Flight Number: ${flightArr[previousFlight].flight_number}`
        flightImg.src = flightArr[previousFlight].links.patch.small

        currentFlight = flightArr[previousFlight].flight_number
        console.log(flightArr[previousFlight])
        console.log(flightArr[previousFlight].flight_number)

        currentFlight = flightArr[previousFlight].flight_number
        // console.log(`current flight: ${currentFlight} | array number: ${currentFlight - 1}`)
        previousFlight = currentFlight - 2
        console.log(`Previous flight array number: ${previousFlight}`)

        // console.log(flightArr[previousFlight].details)
    })

    nextBtn.addEventListener('click', function ()
    {
        console.log(flightArr[currentFlight].name)
        flightName.innerText = `${flightArr[currentFlight].name} - Mission Success: ${flightArr[currentFlight].success}`
        flightDescription.innerText = `Mission Name: ${flightArr[currentFlight].name} | Launch Date: ${flightArr[currentFlight].date_local} | Rocket: ${flightArr[currentFlight].rocket} | Details: ${flightArr[currentFlight].details} | Flight Number: ${flightArr[currentFlight].flight_number}`
        flightImg.src = flightArr[currentFlight].links.patch.small

        currentFlight = flightArr[currentFlight].flight_number
        previousFlight = currentFlight - 2
        console.log(flightArr[previousFlight])
        console.log(`Previous flight array: ${previousFlight}`)
    })

})
