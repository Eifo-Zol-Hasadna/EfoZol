# EfoZol

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/EladRK/EfoZol?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# EfoZol - Open Market - Making Retailer Prices Open
Open Grocery will make retailers produce prices accessible and available to the public. 
The project’s first goal is to create a tool that allows each user to compare the cost of their personal shopping bag with all big retailers, including the ability to filter based on geo-location. This way, we can all easily know where to do our shopping.

As a second goal, and after collecting the data over time, we wish to publish some analysis of the Israeli market. For instance, we believe we could supply information on topics such as increase or decrease in the price of produce for the manufacturer, identifying food cartels and price fixing, analyzing the food cost with accordance with living area, predicting price changes for certain holidays (Passover, Shavuot, Independence Day etc.) and agricultural events.

## Web Server instalation 

```
sudo dnf install postgresql -y
sudo dnf install postgresql-server -y

```

 - Install PostgreSql
 - Restore DB (found in backend/sql)
 - Run 
```
cd frontend 
bower install
cd backend
npm install
node index.js

``` 
 login to API (/api/external/login) or  register if needed (/api/external/register)
 both end point get the following json
{
	"UserName":"xxxxxx",
	"Password":"yyyyy"	
}
(to register you will need to add the header "access-token" and the value "zolAdmin112200")

both endpoint will return a json object that has a jwt token.
add this token to all the following reusts using the "access-token" header
 
 
 
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
  5. update store
  6. update product
  7. update branch
2. Get API
  1. get products (by name)
  2. get branches (by location)
  3. get prices (branches * products, ordered by price)
		
## Teams
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
