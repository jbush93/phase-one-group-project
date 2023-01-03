SpaceX Launch Data

This script is designed to display information about SpaceX launches on a website. It makes use of the Fetch API to send a GET request to the SpaceX API and retrieve data about past launches. The data is then used to populate a list of launches and display details about a specific launch.

Functionality
The script has several functions to handle different tasks:
fetchAll(): This function sends a GET request to the SpaceX API and retrieves data about all past launches. It then uses this data to populate the list of launches and display details about the first launch.
renderData(launch): This function takes in a launch object and creates a list element for it. The list element contains the name of the launch and the launch date.
flightDetail(flightNumber): This function takes in a flight number and displays details about the corresponding launch. It updates the various elements on the page with information from the launch object, such as the mission name, launch date, and description.
The script also has event listeners set up to handle user actions:
Clicking on a launch in the list will display details about that launch.
Clicking the "Previous Launch" or "Next Launch" buttons will display the previous or next launch in the list, respectively.
Clicking the "Toggle Dark Mode" button will switch the website between a light and dark theme.

Resources
SpaceX API: 'https://api.spacexdata.com/v5/launches'