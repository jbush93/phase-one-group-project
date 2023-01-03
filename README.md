# SpaceX Launch Data Tracker

## table of contents
 - [General Information]
 - [Github Repo]
 - [Technologies Used]
 - [Backend API Endpoints]
 - [Environment Setup]
 - [Project Status]
 - [Room for Improvement]

## General Information
This project, part of Flatiron Software Engineering track, Phase 1, focused on implementing a get server request from an external API and using that data to build out a front end page to display that data. We worked in a group of 3 to complete this task.

Phase 1 Project for Flatiron School: SpaceX API: https://api.spacexdata.com/v5/launches
Check out our live frontend here

## Github Repo
- GitHub Repo: https://github.com/jbush93/phase-one-group-project

## Technologies Used: 
- javascript
- html
- css

### Backend API Endpoints

| Method | Endpoint            | Params           | Description                                          |
| ------ | --------------      | ---------------- | ---------------------------------------------------- |
| GET    | /name               |                  | returns mission name                                 |
| GET    | /flight_number      |                  | returns mission flight number                        |
| GET    | /date_local         |                  | returns date of mission in local time                |
| GET    | /success            |                  | returns is the mission was a success (T/F)           |
| GET    | /rocket             |                  | returns the unique rocket ID                         |
| GET    | /details            |                  | returns details about the launch and mission         |
| GET    | /links/patch/small  |                  | returns an image source of the mission badge         |


## Environment Setup

### Clone repository
**clone** the project repository from github: [https://github.com/jbush93/phase-one-group-project]

## Project Status
- Project is: _in progress_.

## Room for Improvement
Frontend:
- improve overall design of page to make a bit more "sexy"

## Features
- Clicking on a launch in the list will display details about that launch.
- Clicking the "Previous Launch" or "Next Launch" buttons will display the previous or next launch in the list, respectively.
- Clicking the "Toggle Dark Mode" button will switch the website between a light and dark theme.

### Example Functions
- fetchAll(): This function sends a GET request to the SpaceX API and retrieves data about all past launches. It then uses this data to populate the list of launches be calling renderData()
- renderData(launch): This function takes in a launch object and creates a list element for it. The list element contains the name of the launch.
- flightDetail(launchData): This function takes name, flight number, local date, mission success, rocket and details and displays all this information about the first launch.
- Mouseover event listener passed in with renderData() to modify the dom if you hover over one of the newly created LIs from the page load
- nextBtn / previousBtn click event listeners. When clicked, the dom will be modified to show the next launch or previous by showing the new data on the flgiht details div, respective to the button clicked.
- Dark mode button: When clicked, this will toggle the background and text color between dark-mode and non-dark-mode