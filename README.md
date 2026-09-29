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

### Impact and Value

Right now, a cabin owner or farmer who wants to know the fire risk at their spot has to dig through several government websites full of index numbers and fuel codes, and even then they won't see which way a fire would go or how far. When we're done, we want that same person to tap their spot on a map and see the answer drawn out in front of them, with the official danger level and a sentence or two in plain English. We will get there by:

- Pulling in free Canadian government data automatically every day
- Running the real Canadian fire equations and checking our numbers against FBP Go and REDapp
- Talking to real users (cabin owners, a rural municipality, a volunteer fire department) and adjusting based on what they tell us

### Who

- Our focus is people who aren't fire professionals but live with wildfire risk anyway
    - Cabin and cottage owners near forests
    - Farmers and ranchers, especially during spring grass fire season before things green up
    - Small towns, rural municipalities and volunteer fire departments that don't have a fire behaviour specialist
    - Campers and hikers deciding if tonight is a safe night for a campfire
    - Travellers heading somewhere fire-prone, like the Rockies in summer
- We are not building a tool for fire crews. They already have FBP Go, REDapp and professional software
- We are also not an evacuation tool. The app will always point people to official alerts (in Saskatchewan, the Saskatchewan Public Safety Agency and SaskAlert)

### What

- Map app (Phone application)
- Tap any spot
    - The app fills in what's growing there, how steep the ground is, today's fire weather and the wind by itself
    - It runs the Canadian fire equations and tells you how fast a fire would spread, how hot it would burn, and whether it would stay on the ground or climb into the treetops
    - It draws the spread shape on the map for 1, 2 and 4 hours. Fires don't spread in circles, they stretch out downwind like an egg, so the shape shows direction too
    - It gives the official danger level (Low, Moderate, High, Very High, Extreme) and explains it in plain words
- Saved places and alerts
    - Users can save their cabin, farm or town
    - The app sends a notification when the danger level changes or a new wildfire is detected nearby
- Active fires
    - Wildfires burning right now show up on the map, from Canadian and NASA satellite data
- What-if mode and trip planning
    - Drag sliders to change the wind, temperature or dryness and watch the spread shape grow or shift
    - Add a trip (for example Calgary and then Banff). If it's a few days away the app uses the forecast. If it's weeks away it opens what-if mode instead
- Fire history
    - See where wildfires have actually burned around a spot since 1972, with rings at 10, 25 and 50 km
    - This works in January as well as July, so people have a reason to open the app all year
- Smoke add-on
    - A small toggle that shows current air quality from Environment Canada on the same map

Constraints:

- The vegetation map can be wrong at one exact spot
    - It's accurate over large areas, but a cabin with a cleared yard might still show up as "jack pine forest." We still need to decide if users can correct the vegetation at their own spot
- Our first version keeps things simple
    - The spread shape assumes the vegetation and wind stay the same across the whole area. Real fires hit a lake, a road or a different forest and change. The app will say this clearly
    - Mountains are where we're weakest. Places like Banff bend and funnel the wind, which is the exact problem WindNinja solves. Our first version uses the forecast wind as it is
- Testing out of season
    - We're building this in fall and winter when almost nothing is burning. We'll check our math against FBP Go and REDapp, and replay real past fires from 2023 to 2025 to compare our shapes with where those fires actually went
- Safety and wording
    - Someone could treat our shape as "the fire will stop here," which would be dangerous. Every result will say it doesn't replace official alerts, and what-if results will be labelled as scenarios, not forecasts
    - We reuse the official danger classes from CWFIS instead of making up our own
    - "No fires here in 50 years" doesn't mean a spot is safe, so the fire history feature will never word it that way

### How

Tech stack (planned, not final):

- Figma for prototyping
- Nodejs and Express backend
- MongoDB database
- A web map library for the front end (still choosing)
- A scheduled job that collects and cleans the data every day

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

## Project Schedule

September is done. October to December is our plan and will change as we go.

September:

- Pivoted from Smoke Signal to the Canadian wildfire app after gathering feedback
- Project ideation, competitor analysis, user analysis and business model analysis completed

October:

- User interviews with cabin owners, a rural municipality and a volunteer fire department
- Test calls to every data source
- Class diagram and lo-fi completed

November:

- Daily data pipeline running
- Fire equations checked against FBP Go and REDapp
- Hi-fi completed
- Demo at Bazaar day, replaying a real past fire day

December:

- MVP 1 completed

## Vlogs
**COMING SOON** 