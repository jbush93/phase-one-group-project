const url = 'https://api.spacexdata.com/v5/launches'
const dbUrl = 'http://localhost:3000/launches'
const flightName = document.querySelector('#missionName')
const flightImg = document.querySelector('#flight-image')
const flightDescription = document.querySelector('#flight-description')
const reviewDiv = document.querySelector('.reviews')
const launchDate = document.querySelector('#launchDate')
const missionSuccess = document.querySelector('#success')
const missionRocket = document.querySelector('#rocket')
const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')
const darkModeBtn = document.querySelector('#dark')
const apiForm = document.querySelector('#api-form')
const reviewForm = document.querySelector('#review')
const editForm = document.querySelector('#editReviews')
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
            console.log(data)
            data.map(function (launchData) 
            {

                console.log(launchData)
                renderData(launchData)
            })

            flightDetail(flightArr[0])

        })
}

function fetchDB()
{
    fetch(dbUrl)
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            console.log(data)
            data.map(function (dbLD)
            {
                console.log(dbLD)
                renderDBData(dbLD)
            })
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
function renderDBData(dbLD)
{
    const h5 = document.createElement('h5')
    const p = document.createElement('p')

    h5.innerText = `${dbLD.name} | ID: ${dbLD.id}`
    p.innerText = dbLD.review

    reviewDiv.append(h5)
    reviewDiv.append(p)
}

function flightDetail(launchData)
{
    flightName.innerText = `${launchData.name} - Flight #: ${launchData.flight_number} `
    launchDate.innerText = launchData.date_local
    missionSuccess.innerText = launchData.success
    missionRocket.innerText = launchData.rocket
    flightDescription.innerText = launchData.details
    flightImg.src = launchData.links.patch.small
}

function submitForm(evt)
{
    evt.preventDefault()

    let formData = {
        name: evt.target.name.value,
        review: evt.target.newReview.value
    }

    console.log(evt.target.name.value)
    console.log(evt.target.newReview.value)

    fetch(dbUrl, {
        method: 'POST',
        headers: {
            "Content-type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            renderDBData(data)
        })
}

function submitEditForm(evt)
{
    evt.preventDefault()
    console.log(evt)

    let formData = {
        review: evt.target.updateReview.value
    }

    let id = evt.target.ids.value
    console.log(id)


    console.log(evt.target.ids.value)
    console.log(evt.target.updateReview.value)

    fetch(`${dbUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(function (res)
        {
            return res.json()
        })
        .then(function (data)
        {
            renderDBData(data)
        })
}

document.addEventListener('DOMContentLoaded', function (evt)
{
    evt.preventDefault()
    fetchAll()
    fetchDB()

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

    // apiForm.addEventListener('submit', function (evt)
    // {
    //     evt.preventDefault()
    //     const query = encodeURI(evt.target.search.value)
    //     console.log(query)
    //     let data = {
    //         "options": { flight_number }
    //     }
    //     fetch(`https://api.spacexdata.com/v5/launches/query${data}`)
    //         .then(function (res)
    //         {
    //             console.log(res)
    //         })
    // })

    reviewForm.addEventListener('submit', submitForm)
    editForm.addEventListener('submit', submitEditForm)

})

