# Project Ideation

How FirePath started, who it's for and what we think it needs to do. This is our early thinking, and we'll adjust it as we talk to real users.

### Project name

* FirePath
    * A map app that shows the public how a wildfire would behave at any spot in Canada, using Canadian fire science and government data

### Key users

* Cabin and cottage owners near forests
* Farmers and ranchers, especially during spring grass fire season before things green up
* Small towns, rural municipalities and volunteer fire departments that don't have a fire behaviour specialist
* Campers, hikers and anyone deciding if today is a safe day for a campfire or a brush burn
* Travellers heading somewhere fire-prone, like the Rockies in summer

### Problems and needs

* Nobody outside the fire service has an easy way to see how a fire would behave at one exact spot today
    * FBP Go and REDapp can do it, but they're built for trained fire crews
* Fire danger information is scattered across several government sites
    * It's written for experts and full of fuel codes and index values
* A danger number on its own doesn't tell you which way a fire would head or how far it could get
    * People need to see that on a map
* Checking the risk for somewhere you'll be next week or next month is hard, since most tools only look at right now
* If you're about to buy a cabin or book a campground, you can't easily tell whether wildfires have burned nearby before

### Solutions and features

* Tap a spot on the map and the app pulls in the vegetation, slope, fire weather and wind by itself from Canadian government data
* It runs Canada's own fire behaviour equations and draws how far a fire could spread in 1, 2 and 4 hours
* Each result comes with the official danger level (Low up to Extreme) and a sentence or two in plain language
* What-if mode lets people drag sliders for wind and dryness
* Trip planning lets people add a trip and check each stop along the way
* Users can look up fire history around any spot and save places to get alerts
* Air quality shows as an extra layer on the same map

### Requirements

* Pull data in automatically from Natural Resources Canada (fuel map, fire weather, elevation, fire history), Environment Canada (weather and air quality) and NASA FIRMS (active fires), and clean it before we use it
* Get the Canadian Fire Behaviour Prediction System right
    * For the same inputs, our numbers have to match what FBP Go and REDapp give
* User accounts with secure login, saved places and notifications
    * Each person sees only their own saved places
* The map has to work on both phones and computers, and it should load quickly because it reads from our own stored copy of the data
* Honest safety messaging
    * The app says plainly that it isn't an evacuation tool
    * It links to official alerts
    * It labels what-if results as scenarios instead of forecasts
