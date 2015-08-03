# EfoZol

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/EladRK/EfoZol?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# opma - Open Market - Making Retailer Prices Open
Open Grocery will make retailers produce prices accessible and available to the public. 
The project’s first goal is to create a tool that allows each user to compare the cost of their personal shopping bag with all big retailers, including the ability to filter based on geo-location. This way, we can all easily know where to do our shopping.

As a second goal, and after collecting the data over time, we wish to publish some analysis of the Israeli market. For instance, we believe we could supply information on topics such as increase or decrease in the price of produce for the manufacturer, identifying food cartels and price fixing, analyzing the food cost with accordance with living area, predicting price changes for certain holidays (Passover, Shavuot, Independence Day etc.) and agricultural events.

## Web Server instalation 

 - Install PostgreSql
 - Restore DB (found in backend/sql)
 - Run 
```
cd frontend 
bower install
cd backend`
npm install`
node index.js

``` 
 
The code is now running the server at `http://localhost:5000`
Frontend stuff is at `./frontend`

## Technology Stack
1. AngularJS (1.4)
2. NodeJS
3. ExpressJS
4. PostgreSql


## Main API
1. Pull API
  1. add store (auth)
  2. add branch
  3. add product
  4. add price (product/branch/time)
2. Get API
  1. get products (by name)
  2. get branches (by location)
  3. get prices (branches * products, ordered by price)
		
## Teams(R&D) 
1. Client
  1. Web (Javascript, Angular)
    1. Boaz
    2. Nirit
    3. Michael B
  2. Android
    1. Nitzan
  3. iOS
2. Web Server 
  1. API (NodeJs) 
    1. Daniel C
    2. Michael B
    3. Nirit 
  2. db (PostgreSql)
    1. Xenia
3. DevOps 
  1. Docker
    2. Boaz
  1. Cloud
  2. Testing
4. Parsers
5. Big Data
6. UI/UX
  1. Rotem A.
7. Documentation
  1. Readme.MD 
    1. [Elad K](https://github.com/eladrk)
 
## Teams(Business)	
1. PR
2. Law
3. Finance
4. Marketing
	
## Knowledge base
- Knowledge base (1 - basic, 2 - medium, 3 - good)
- Want to know (a - not now, b - nice to learn, c - wants to learn)

|Name        | Github     | JavaScript | Python | R | SQL | NoSql | Angular | Node | Docker | 
|------------|------------|------------|--------|---|-----|-------|---------|------|--------|
|Elad Katz   | eladrk     | 3c         | b      | b | 3b  | 2c    | 3c      | 3c   | 1c     |
|Michael B   | mberaz     |            |        |   |     |       |         |      |        |
|[your name] |            |            |        |   |     |       |         |      |        |

## Links
1. Trello
2. [Efo-ZolHasadna Github page](https://github.com/Eifo-Zol-Hasadna)
3. Fields of knowlege and/or interest.
4. [Documents](https://github.com/Eifo-Zol-Hasadna/docs)
  1. Teams
  2. Presentation
5. [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/EladRK/EfoZol?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
6. Stackoverflow links

## Architecture
1. Scraping Server
  1. Scrapes the XMLs from all the different servers.
  2. Nomalize data
  3. Insert data to WebServer through API.
2. App Web Server
  1. Exposes API to insert Raw Data. (in the future it will allow small retailers to insert their data as well)
  2. Insert Data to the PostgreSql database
  3. Expose normalized API to explore all data in the server (allowing others to plug into our system, and to continue our work)
  4. Expose a subset of the full API to the web, Android and iOS clients.

                                /-- Data Magic (Machine Learning etc.)
                               /
XML - Parsers - RawData JSON --                                                  /-- Web Client
                               \                                                /
                                \-- Normalizers -- API -- WebServer --> API -------- iOS Client
                                                                                \
                                                                                 \-- Android Client 

## FAQ

