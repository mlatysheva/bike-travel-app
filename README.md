# Bike Travel App

## The app offers the following user features:

- The user can search for a place to travel
- The place search results are fetched from Tripadvisor as a list of cards
- By clicking on a card the user receives more detailed information from Tripadvisor including reviews
- The user can look for bikes which were stolen around this location and reported to the Bike Index open API
- The bike search results are rendered as a list of cards
- The user can click on a particular card to see bike details
- The user can report a bike theft through a form with validation
- The form data is sent to the Bike Index open API
- API calls to Tripadvisor and Bike Index to fetch data

## Stack used and tech features:
- Angular v.16
- NgXS state manager
- RxJS library for asyncronous calls
- PWA (progressive web application) features
- Two language versions (Egnlish and German)
- From validation
- Typescript
- Calls to Tripadivsor and Bike Index APIs
- Responsive design

## Functionality

Homescreen to search for a place to travel. The app has two language versions:

![Homescreen English](/screenshots/homescreen_en.png)

![Homescreen German](/screenshots/homescreen_de.png)

The places are fetched from the Tripadvisor API and are rendered as cards:

![List of places](/screenshots/found-locations.png)

By clicking on a card, the user sees detailed information fetched from the Tripadvisor API, including reviews:

![Details of a location](/screenshots/selected-place.png)

The user can looks for the bikes stolen around the selected location:

![Stolen bikes](/screenshots/stolen-bikes.png)

The user can see details of a particular stolen bike:

![Stolen bikd](/screenshots/selected-bike.png)

The user can file a theft report with information about his/her stolen bike:

![Theft report](/screenshots/theft-report.png)

The form has field validation options:

![Theft report validation](/screenshots/theft-report_validation.png)

The app has responsive design:

![Homescreen reponsive](/screenshots/mobile_homescreen.png)

The mobile menu:

![Mobile menu](/screenshots/mobile_menu.png)

The theft report in the mobile version:

![Theft report mobile](/screenshots/mobile_theft-form.png)

The app uses PWA functionality and with meny features available offline:

![Offline Notification](/screenshots/pwa_offline-message.png)

The scripts to operate the app are provided in the `package.json` file in the section `scripts`.