# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index `'/products' [GET]`
- Show  (args: id) `'/products/:id' [GET]`
- Create [token required] (args: Product obj) `'/products' [POST]`
- Products by category (args: category) `'/products/:category' [GET]`

#### Users
- Index [token required] `'/users' [GET]`
- Show [token required] (args: id)  `'/users/:id [GET]`
- Create New User [token required] (args: User obj) `'/users [POST]`

#### Orders
- Current Order by user (args: user id)[token required] `'orders/open/:user_id' [GET]`
- Completed Orders by user (args: user id)[token required] `'orders/closed/:user_id' [GET]`

## Data Shapes
#### Product
```
-  id
- name
- price
- category
```
#### User
```
- id
- firstName
- lastName
- password
```
#### Orders
```
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
```
## Database Schema
#### Products
```
id SERIAL PRIMARY KEY     
name VARCHAR(100)  not_null   
price INT    not_null   
category VARCHAR(100)   
```
#### Users
```
id SERIAL PRIMARY KEY     
first_name VARCHAR(100)  not_null   
last_name VARCHAR(100)   not_null   
password VARCHAR(100) JWTrequired not_null   
```
#### Orders
```
id SERIAL PRIMARY KEY    
userId  INT foreign_key to: users[id]   
orderStatus VARCHAR(15)   
```
#### Order_Products
```
id SERIAL PRIMARY KEY    
orderId INT  foreign_key to: orders[id]   
productId INT  foreign_key to: products[id]
quanity INT  not_null default 1   
```