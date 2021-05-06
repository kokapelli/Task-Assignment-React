# Technical Assessment Task
## Requirements
* should be a web-application written in React and Typescript/Javascript
* should include a map based on the Mapbox SDK
* should allow users to draw a line on the map to create an “order”
* when drawing a line, the app should display the length of the line and the cost of the inspection (use 100 SEK/km for cost calculation)
* should have a button for submitting the order to an imaginary backend (the backend does not have to be implemented)

## Resources
You will need to have NPM or Yarn installed on your computer in order to install dependencies. The app can be initiated by using the tool [“Create React App”](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

## Documentation
Documentation for the Mapbox SDK is available [here](https://docs.mapbox.com/mapbox-gl-js/api/)

## Hand In
Include a list of any third-party libraries used in the Readme of the project.

## Third-Party Software
* express
* mapbox-gl
* uuid
* react-icons

# Todo list

- [x] Connect with the Mapbox SDK
- [x] Create a skeleton structure of the application
- [x] Come up with and create an UI
- [ ] Click/click and drag event compatibility
- [ ] Capacity to draw a line
- [ ] A way to display the line distance and cost conversion
- [ ] Side menu that lists the lines, their distance and cost on the map
- [ ] Button connection with the Order class.
- [ ] Button to submit the order to the imaginary backend
- [ ] Add functionality to directly move to an address/city for improved UX
- [ ] When an order item is clicked, highlight the line
- [ ] Make sidebar and navigation bar adjustable according to window size