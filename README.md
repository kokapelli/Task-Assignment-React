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

## Running
1. Create and add API key and desired server port number to <code>draw-distance/src/config.js</code>. Alternatively just hard code them in *draw-distance/src/frontend/components/Map.js* and *draw-distance/src/backend/server.js*
2. Run <code>node server.js</code> in *draw-distance/src/backend*
3. Run <code>npm start</code> in *draw-distance/src/*

## Third-Party Software
* mapbox-gl
* mapbox-gl-draw
* mapbox-gl-geocoder
* react-icons
* turf
* express

## Todo list

- [x] Connect with the Mapbox SDK
- [x] Create a skeleton structure of the application
- [x] Come up with and create an UI
- [x] Click/click and drag event compatibility
- [x] Capacity to draw a line
- [x] A way to display the line distance and cost conversion
- [x] Side menu that lists the lines, their distance and cost on the map
- [x] Button to submit the order to the imaginary backend
- [x] When an order item is clicked, highlight the line
- [ ] Add functionality to directly move to an address/city for improved UX
- [x] Update order item cost/distance as it is changed in real-time
- [x] Deleting a line should delete the item from the order
- [x] Add mock backend
- [x] Resolve UI issue with navigation icons being offset
- [x] Submitting an order should remove existing lines and items in order
- [x] Investigate solution to side bar not being scrollable
- [ ] Make sidebar and navigation bar adjustable according to window size
- [ ] Conditional rendering on submit button to be grayed out when the order is empty
- [ ] *(FAILED: Order to line highlighting Found no documentation to trigger/activate a MapBox line from code)  *


## Known Issues

* Selectively highlighting Mapbox lines consecutively will keep the highlighted in the order section. The extra highlighted values will cause the order items to all be removed while un-targeted lines will remain on the map. Thus causing a discrepancy between the order items and the lines on the map.

* The web application lacks dynamicity for window resizing.

* Main view price remains beneath side bar. Can be fixed with conditional rendering based on the boolean value of sidebar state.

* Mapbox keybind for LineString does not work.

* Placing an order will only work once it is pressed due to poor man's boolean flipping approach.

* Occasionally the float round up will bug and produce a long sequence of decimals

* When the order list becomes scrollable, depending on zoom the last item will be blocked by the sidebar footer.
