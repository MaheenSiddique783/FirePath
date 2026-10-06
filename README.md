# FirePath

Welcome to our capstone project.

We're building a map app that shows regular people in Canada how a wildfire would behave at any spot they care about, using Canada's own fire science and free government data.

### Team

1. Ansar Ahmed
2. Gursharan Singh Rehal 
3. Maheen Siddique

### Project background and business need/ opportunity

- Wildfire season in Canada keeps getting worse. 2023 was the most destructive season ever recorded, with more than 6,000 fires burning about 15 million hectares, more than double the old record from 1989 ([source](https://natural-resources.canada.ca/stories/simply-science/canada-s-record-breaking-wildfires-2023-fiery-wake-call))
- Canada already has its own system for rating fire danger, the [Canadian Forest Fire Danger Rating System](https://cwfis.cfs.nrcan.gc.ca/background/summary/fbp). Fire agencies here use it every day. It has two parts:
    - The Fire Weather Index, which rates how dry and fire-ready things are based on temperature, humidity, wind and recent rain
    - The [Fire Behaviour Prediction System](https://cwfis.cfs.nrcan.gc.ca/background/summary/fbp), a set of equations that work out how fast a fire spreads and how hot it burns for each Canadian vegetation type (black spruce, jack pine, aspen, open grass and so on)
- What is a fuel type?
    - It's the kind of vegetation growing at a spot. Fire behaves very differently in a jack pine forest than in a grass field, so the equations need to know which one you're standing in. Natural Resources Canada publishes a [national fuel type map](https://open.canada.ca/data/en/dataset/4e66dd2f-5cd0-42fd-b82c-a430044b31de) at 30 m detail
- Tools that show fire behaviour on a map already exist, but they're built for fire crews:
    - [Wildfire Analyst Pocket](https://pocket.wildfireanalyst.com/) lets a firefighter tap a spot and see how a fire would spread there in seconds. It runs on US vegetation data that stops at the border and uses US fire equations, so it doesn't fit Canada
    - [WindNinja](https://research.fs.usda.gov/firelab/products/dataandtools/windninja) from the US Forest Service adjusts wind for hills and valleys. It only handles wind, and it's an expert tool
    - [FBP Go](https://apps.apple.com/ca/app/fbp-go/id1605675034) from the BC government runs the Canadian equations on a phone, but there's no map and no live weather. You type every input by hand, including fuel codes only fire staff would know
    - [REDapp](https://www.frames.gov/catalog/19121) is a Canadian fire behaviour calculator for agency staff, not the public
- So the equations are public and the data is free, but nobody has put them together in an app for someone who has never heard of a fuel type

### Reason

This project started as Smoke Signal, an app that warned people with asthma or COPD about wildfire smoke. After receiving some great feedback, we decided to build something less prediction-based. This led us to explore WindNinja and Wildfire Analyst Pocket and ask what a Canadian version would look like. When we looked into it, we found that Canada already has the science and the data, but a cabin owner in northern Saskatchewan still has no simple way to check what a fire would do near their place today. We want to take the same science fire agencies use and make it something anyone can read.


### Data:

Everything we use is free and public. A couple of sources need a free sign up key.

- [National fuel type map](https://open.canada.ca/data/en/dataset/4e66dd2f-5cd0-42fd-b82c-a430044b31de) from Natural Resources Canada tells us what's growing at each spot. It changes about once a year
- The [Canadian Wildland Fire Information System (CWFIS) datamart](https://cwfis.cfs.nrcan.gc.ca/datamart) gives us daily fire weather all year, plus active fires and fire perimeters during fire season
- Environment and Climate Change Canada gives us wind, temperature and humidity every hour, with OpenWeatherMap as a backup
- National elevation data from Natural Resources Canada tells us how steep the ground is and which way it faces
- [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/) satellites show where fires are burning right now, several times a day
- The [National Burned Area Composite](https://cwfis.cfs.nrcan.gc.ca/datamart/download/nbac) is Canada's record of where wildfires burned going back to 1972. We use it for fire history
- Environment Canada's Air Quality Health Index gives us the smoke layer

Raw government data is messy, so a big part of the work is cleaning it. Some examples:

- A weather station goes offline, so we fill the gap from the nearest working station and mark it as filled in
- One source gives wind in m/s and another in km/h, so we convert everything to the same units
- The fuel map stores codes like "C-3," so we translate them into names like "jack pine forest"
- Satellites sometimes flag gas flares or factories as fires, so we filter out known industrial sites
- Every source uses its own map grid, so we line them all up so one tap pulls the right value for the exact same spot

MVP 1

- Map focused on Saskatchewan (we might widen it to all three Prairie provinces)
- User taps any spot and the app fills in vegetation, slope, fire weather and wind by itself
- System runs the Canadian fire equations for spread speed, intensity and ground vs treetop fire
- System draws the spread shape for 1, 2 and 4 hours
- System shows the official danger level with a plain language explanation
- Active wildfires shown on the map
- User accounts, saved places, and alerts when danger changes or a fire is detected nearby
- Smoke add-on with an air quality layer on the map

MVP 2

- What-if mode with sliders for wind, temperature and dryness
- Trip planning with forecasts for trips a few days away and what-if mode for trips further out
- Fire history around any spot (this might move into MVP 1 since it reuses data we already collect)

MVP 3

- Cover all of Canada
- Wind adjusted for hills and valleys using WindNinja, which is free and open source
- Fire growth that changes as it crosses different vegetation and terrain, closer to Canada's professional [Prometheus](https://publications.gc.ca/collections/collection_2010/nrcan/Fo133-1-417-eng.pdf) model
- Offline mode for cabins with no cell signal
- French language support
- Health specific smoke alerts, the original Smoke Signal idea

## Vlogs
**COMING SOON** 
