## Project Requirements

### Project Name
FirePath: a wildfire behaviour map for the public, built on Canadian fire science and government data

---

## Functional Requirements

- Tap a spot, see what a fire would do
  - Automatic lookup of the vegetation, slope, fire weather and wind for any spot in Saskatchewan
  - Fire behaviour calculated with Canada's official Fire Behaviour Prediction System
  - Spread shape drawn on the map for 1, 2 and 4 hours
  - Official fire danger level with a short plain-language explanation
  - A note on every result that the app is not an evacuation tool, with links to SaskAlert and SPSA

- Map layers
  - Active wildfires detected by satellite
  - Air quality layer that can be turned on and off

- Accounts and saved places
  - Sign up, log in and password reset
  - Save, rename and delete places
  - Alerts when the danger level at a saved place changes or a new fire is detected nearby

- Automatic data updates
  - Scheduled downloads from government data sources
  - Checking and cleaning data before the app uses it
  - Showing the last good data, with its age, if a source is down

- What-if mode and trip planning (MVP 2)
  - Sliders to change wind and dryness and see how the spread shape changes
  - Checking fire danger for each stop on a trip

- Fire history (MVP 2)
  - Past wildfires within 10, 25 and 50 km of a spot, going back to 1972

---

## Technical/Performance Requirements

- External data sources
  - Natural Resources Canada: fuel type map, fire weather, elevation and fire history
  - Environment and Climate Change Canada: weather and air quality
  - NASA FIRMS: active fire detections

- Scheduled data collection scripts for each source

- Frontend: mobile app 
- Map library: Leaflet or MapLibre (to be chosen)
- Backend: Node.js and Express
- Fire engine: Python, using the official cffdrs package
- Database: PostgreSQL with PostGIS (to be confirmed by the team)
- Security: hashed passwords, HTTPS, and API keys kept out of GitHub

- Performance targets (from our SMART goals)
  - A result shows up within 3 seconds of tapping
  - Fire weather on the map is never more than 24 hours old
  - Our fire calculations match the official cffdrs package within 5%
