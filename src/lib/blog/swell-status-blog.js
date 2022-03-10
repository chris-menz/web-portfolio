const p1 =
  "Since I started surfing, I’ve always wanted to make my own surf report. Existing surf reports all have their issues. Surfline only gives three free surf checks a week, Magic Seaweed is free but not accurate where I live, and all other forecasters are just not pleasant to use, either being slow or poorly designed. Only a couple of these forecasters allow you to track your surf sessions, which I had been doing by hand but can easily be automated. A couple months ago I set out to make my own web-based forecaster, which is now complete and live on the web.";
const p2 =
  "The core feature of this application is the surf reports, which consists of swell data (ocean energy), wind data (speed and direction), and tide data (high and low tides). I needed access to this data at any given surf spot around the world. ";
const p3 =
  "For swell data, I considered two options: consuming a marine weather API, or downloading live buoy data from the NOAA website (a government-ran buoy data service). I decided to go with an API as it would provide forecasts as well as current data and it would not require parsing raw buoy data. I considered the following APIs for marine weather: the Stormglass API, the Magic Seaweed API, the World Weather Online API and the Sofar API. I evaluated these APIs in terms of accuracy, reliability and price. Accuracy was the highest priority. I cross referenced reports that these APIs produced with surf report websites that I considered to be accurate. The Stormglass API proved to be the most accurate and was one of the cheaper options, so I decided to use it.";
const p4 =
  "For wind data, I used the Open Weather Map API. This API also provides weather reports, which I included in the surf reports as is common practice among other surf forecasters. The wind data from this API also lined up with reports from sources that I trusted. For tide data, I used the WorldTides API. With all my data sources ready, it was time to build a back end that would send swell, wind and tide data to the client which would then be displayed to the user.";
const p5 =
  "The first version of SwellStatus’ back-end was written in JavaScript using Node and Express. I chose Node because I was already familiar with JavaScript and it is also fairly popular among programmers, which means that resources are abundant. This API was to have one job: take in a location as a parameter and send swell, wind and tide data to the client for the given location. Accomplishing this was fairly simple. I set up three routes in my Express server. Each would take in a latitude and a longitude, fetch data from the external APIs and send back swell, wind, and tide data, respectively. I used Axios to make API requests, and tested that each route was working properly using Insomnia, a RESTful API client. Once these routes were working as intended, I moved on to the front end.";
const p6 =
  "I used Svelte for the front-end of this project. Svelte is an enjoyable framework to work with, with clean, minimal syntax and great features such as reactivity and binding which I used extensively. Svelte is also very well documented, and I found that the Svelte docs were the only resource I needed to build my front-end. ";
const p7 =
  "The front end has to allow a user to choose a surf spot and then display the surf report for that spot. At this stage I was not using a database as I had no need for one, so I stored the surf spots in an array of surf spot objects. Each surf spot object has a name, a region, a location, a latitude and a longitude. ";
const p8 =
  "For searching, I decided to use two dropdown menus, one for region options and one for surf spot options that have the same region as the selected region, populated by arrays. I could have used a search bar instead, and plan to add a search bar in the future alongside the dropdown menus. Both dropdowns utilize Svelte’s binding feature, binding a variable to the selected option of the dropdown that automatically updates on a new selection. The region options dropdown uses an “on:change” directive that filters the surf spot options to the spots in the selected region. ";
const p9 =
  "Once a user selects a surf spot and searches, the front end makes three requests to the back-end for data to populate the surf report, passing in the surf spots latitude and longitude as parameters. The data is parsed and adjusted to the correct time zone and then displayed to the user. ";
const p10 =
  "I used plain CSS to create the layout. I tried a couple different component-based frameworks, but each time I had more trouble customizing the components to look the way I wanted them to then I did just creating the components from scratch in CSS. For other projects I may attempt using a component-based framework again if the use case is appropriate, but I’m much more interested in trying out something like Tailwind CSS to retain more customizability. I did not try Tailwind with this project.";
const p11 =
  "The surf reports were working how I wanted to and I had accomplished my original goal. At this point, my vision for the project expanded and I wanted users to be able to log their surf sessions and share these sessions with other people.";
const p12 =
  "Logging sessions is common practice among many surfers as wave quality can be fickle and some surf spots require specific conditions for good waves. I wanted surfers to be able to enter a time, date and location that they went surfing and the website to automatically retrieve the conditions for them, instead of them having to manually keep track of what the conditions were which is what most surfers do. From there, they could add a description where they detail what the waves were like that day. The next time they go surfing, they can cross reference the forecasted conditions with their logged sessions at that spot to get a better idea of what the waves will be like.";
const p13 = "I planned out all my models and routes beforehand.";
const p14 =
  "I decided to not write my new back-end in JavaScript (Node). I found Node to be too dependency reliant. In a test project, I attempted to implement authentication using the Passport library and did not have a good time with it. Another reason was that I wanted to get experience writing an API with a different language/framework to get a better grasp on core API principles that are shared across every language, as all I knew was the Node way of doing things.";
const p15 =
  "I wanted a framework that was modern and lightweight. I narrowed my options down to Python + Flask and Go. From those, I chose Go because I prefer statically typed languages and it has a reputation for not being dependency heavy. An added benefit of Go is its speed. The base Go Net/HTTP package is excellent, and the only dependency I used on top of it was the Mux router. As I had no prior experience writing in Go, I took some time to study the language and practice solving algorithmic problems in Go. Go has a clean, easy to read syntax and it did not take too long for me to get up to speed writing in it. I also checked out 10+ examples of APIs to get a general feel for the common themes of Go APIs. ";
const p16 =
  "I needed a database to store user data, surf sessions and users’ saved surf spots. Due to the relational nature of the data, I went with PostgreSQL for my database. I also used Redis to cache requests made to external APIs.";
const p17 =
  "I started by setting up the external API request routes, making the requests using Go’s HTTP client of the Net/HTTP package. When hitting one of these routes, the first thing to happen is a check to Redis to see if this same request has already been made in the past day. I track these requests by their parameters and which API the request is being made too. If the key is in Redis, the handler simply returns the data to the client, using the Encoding/JSON package. If the key does not exist in Redis, the handler makes a request to the external API for the data. This system of caching ensures that no duplicate calls are made to the external APIs. ";
const p18 =
  "Before implementing CRUD functionality, I needed to set up user authentication. I used the Gorilla/Sessions package for logging in functionality, and bcrypt to store passwords as hashes as opposed to plaintext. ";
const p19 =
  "The next step was to implement CRUD functionality for all user-specific data. I created a models file to store Go types. I followed my plans when creating the routes, using the Mux router to handle routing. I used the Database/SQL and lib/pq packages to connect to the database and make queries and the Encoding/JSON package to send JSON data back to the client. The new back-end was now complete with all the routes I needed. ";
const p20 =
  "The new version of the front-end required multiple pages. To handle routing, I used SvelteKit on top of Svelte. SvelteKit is still in beta and is frequently updated, but I found it to be the best way to handle routing in Svelte and it is very popular in the Svelte community, with multiple people online mentioning that they use SvelteKit in production with minimal issues. To mitigate the risk of a change breaking my project, I used a specific version of SveleKit as opposed to the “next” version (which automatically updates) and I plan to update it every couple of weeks and test to make sure nothing is broken each time. ";
const p21 =
  "I migrated the Surf Reports page from the old version of the project, and added the following new pages: a home page, a “My Surf Sessions” page (for logging and viewing sessions), and an “Explore Surf Sessions” page (for checking out other user’s public sessions). I once again used pure CSS to design these pages. One part of this project that I plan to improve on is the landing page, which provides links to each other page. I want to make it more aesthetically pleasing while still keeping easy and direct functionality.";
const p22 =
  "I updated the Surf Reports page to have a “Saved Spots” container alongside the menu to search for surf spots. This container displays a quick look at the conditions for any spots that the user has saved, and a button to go to the full report for that surf spot. As most surfers surf at the same few spots, this allows them to access conditions to those spots in a fast and easy way without having to look them up each time.";
const p23 =
  "The “My Surf Sessions” page has two containers. One is to add a new session, which has four select elements: region, surf spot, date and time. The user inputs when and where they went surfing, and the conditions for those parameters are retrieved and displayed. A text input box is then rendered, allowing the user to add a description of the session. There is also an option to make the session public or private. ";
const p24 =
  "The other section is a feed of the user’s past sessions. Each session has a surf spot, location, date, conditions report, and description. There is also a button to delete the session if the user desires to. ";
const p25 =
  "The “Explore Surf Sessions” page is a feed of all the surf sessions that other users have made public, ordered by most recent. There is also a filter section to filter the sessions by region or surf spot. This allows users to check out sessions of other surfers at their local spots.";
const p26 =
  "With the new back-end and front-end complete, it was time to deploy the project.";
const p27 =
  "I decided to deploy the front-end and back-end separately. I deployed the front-end to Netlify, which allows me to quickly push new updates to production. This is useful when testing on mobile, as I do not have any software to emulate mobile browsers. I can view the site live on my phone, make updates and view the new version within a minute.";
const p28 =
  "The API, PostgreSQL and Redis are hosted on a DigitalOcean server. I chose this option for cost benefits. The backend is built by a docker-compose.yml file in the API, which lets me run Go, Postgres and Redis in a single Docker container. One challenge I had when deploying the API was registering it with HTTPS, which was necessary to use cookies. To do this, I installed Nginx and configured it as a reverse proxy, which then allowed me to use Let’s Encrypt to get my API HTTPS-certified. ";
const p29 =
  "I had a lot of fun building this project and learned so much along the way. I’ve gained a significant amount of confidence writing in Go and writing APIs in general. My command of CSS increased tremendously. I also now feel comfortable with some of the more advanced features of Svelte. I learned how to containerize a project with Docker and how to deploy that container. For my next project, I want to either do another web based project but with React instead of Svelte, or create a mobile application.";

export {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
};
