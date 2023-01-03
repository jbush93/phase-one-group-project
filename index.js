const url = 'https://api.spacexdata.com/v5/launches'
const flightName = document.querySelector('#missionName')
const flightImg = document.querySelector('#flight-image')
const flightDescription = document.querySelector('#flight-description')
const launchDate = document.querySelector('#launchDate')
const missionSuccess = document.querySelector('#success')
const missionRocket = document.querySelector('#rocket')
const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')
const darkModeBtn = document.querySelector('#dark')
const form = document.querySelector('#form')
const nav = document.querySelector('#launch-list')

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
            // console.log(data)
            data.map(function (launchData) 
            {

                console.log(launchData)
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
    // console.log(`Mission Name: ${launch.name} | Launch Date: ${launch.date_local} | Rocket: ${launch.rocket} | Flight Number: ${launch.flight_number}`)
    nav.append(newLI)

    newLI.addEventListener('mouseover', function (evt)
    {
        evt.preventDefault()
        flightName.innerText = `${launch.name} - Flight #: ${launch.flight_number}`
        launchDate.innerText = launch.date_local
        missionSuccess.innerText = launch.success
        missionRocket.innerText = launch.rocket
        flightDescription.innerText = launch.details
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
    flightName.innerText = `${launchData.name} - Flight #: ${launchData.flight_number}`
    launchDate.innerText = launchData.date_local
    missionSuccess.innerText = launchData.success
    missionRocket.innerText = launchData.rocket
    flightDescription.innerText = launchData.details
    flightImg.src = launchData.links.patch.small
}

document.addEventListener('DOMContentLoaded', function (evt)
{
    evt.preventDefault()
    fetchAll()

    darkModeBtn.addEventListener('click', function ()
    {
        console.log('dark mode button clicked.')
        let el = document.body
        el.classList.toggle('dark-mode')
    })

    // button functions
    previousBtn.addEventListener('click', function ()
    {
        console.log(flightArr[previousFlight].name)
        flightName.innerText = `${flightArr[previousFlight].name} - Flight #:: ${flightArr[previousFlight].flight_number}`
        launchDate.innerText = flightArr[previousFlight].date_local
        missionSuccess.innerText = flightArr[previousFlight].success
        missionRocket.innerText = flightArr[previousFlight].rocket
        flightDescription.innerText = flightArr[previousFlight].details
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
        flightName.innerText = `${flightArr[currentFlight].name} - Flight #:: ${flightArr[currentFlight].flight_number}`
        launchDate.innerText = flightArr[currentFlight].date_local
        missionSuccess.innerText = flightArr[currentFlight].success
        missionRocket.innerText = flightArr[currentFlight].rocket
        flightDescription.innerText = flightArr[currentFlight].details
        flightImg.src = flightArr[currentFlight].links.patch.small

        currentFlight = flightArr[currentFlight].flight_number
        previousFlight = currentFlight - 2
        console.log(flightArr[previousFlight])
        console.log(`Previous flight array: ${previousFlight}`)
    })

    // form.addEventListener('submit', function (evt)
    // {
    //     evt.preventDefault
    //     console.log('form submit')
    // })

})
