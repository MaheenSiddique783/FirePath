# Competitor Analysis

These are the tools that already show fire behaviour or fire information, and where FirePath fits next to them. It comes from reading each tool's own website and app page. We haven't used all of them ourselves yet, so some of this may change once we do.

The short version is that the science is public and the data is free, but the tools that use them are built for fire crews and agency staff. We couldn't find one that takes the Canadian equations and puts them on a map for someone who has never heard of a fuel type.

### Wildfire Analyst Pocket (Technosylva, US)

* Strengths
    * Tap a spot and see how a fire would spread in seconds
    * Fills in the fuel and weather data by itself
    * Fire agencies use it
* Weaknesses
    * Its vegetation data stops at the US border and it uses US fire equations, so it doesn't fit Canada
    * It's built for trained fire crews
* Where FirePath fits
    * Same tap-and-see idea, but with Canadian data and Canadian equations, explained so the public can follow along

### FBP Go (Government of British Columbia)

* Strengths
    * Official and free
    * Runs Canada's own fire behaviour equations on a phone
* Weaknesses
    * No map, no live weather and no terrain data
    * You type every input by hand, including fuel codes that only fire staff would know
* Where FirePath fits
    * We fill in the inputs automatically and show the result on a map
    * FBP Go is also handy for checking that our math is right

### REDapp (Canadian Interagency Forest Fire Centre)

* Strengths
    * Backed by fire agencies across Canada
    * Takes less training than other professional fire models
    * Connects fire weather ratings to how a fire would actually behave
* Weaknesses
    * It's a calculator for agency staff, not a map
    * Nobody designed it with the public in mind
* Where FirePath fits
    * A map-first version that anyone can pick up without training, built on the same Canadian science
    * Like FBP Go, REDapp gives us something to check our numbers against

### WindNinja (US Forest Service)

* Strengths
    * Adjusts forecast wind for hills, ridges and valleys
    * Free and open source, and other fire tools build it in
* Weaknesses
    * It only handles wind, not fire behaviour
    * It's an expert tool that takes some setup
* Where FirePath fits
    * Because it's open source, we could plug it in later so the app handles mountain areas like Banff better
    * Our first version uses the forecast wind as it is

### CWFIS website (Natural Resources Canada)

* Strengths
    * The official national source
    * Fire weather maps every day of the year, active fires and fire perimeters in season, and a fire history explorer
    * All free open data
* Weaknesses
    * The maps are national overviews written for technical users
    * They don't answer "what would a fire do at my spot," and you can't save places or get alerts
* Where FirePath fits
    * We build on their data instead of competing with it, and add a personal, plain-language layer on top
    * We reuse their official danger levels instead of making up our own

### Side by side

| Tool                    | Canadian equations | Map | Fills in inputs for you | Built for the public |
| ----------------------- | ------------------ | --- | ----------------------- | -------------------- |
| Wildfire Analyst Pocket | No (US)            | Yes | Yes                     | No                   |
| FBP Go                  | Yes                | No  | No                      | No                   |
| REDapp                  | Yes                | No  | No                      | No                   |
| WindNinja               | No (wind only)     | Yes | No                      | No                   |
| CWFIS website           | Danger levels only | Yes | Not for a single spot   | Partly               |
| FirePath                | Yes                | Yes | Yes                     | Yes                  |

### What we still need to find out

* How the fire crews and agency staff we talk to actually use FBP Go and REDapp day to day
* Whether the people in our User Analysis already use any of these, or just a weather app
* Whether any other public wildfire tools or apps in Canada should be on this list
