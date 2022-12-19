CREATE TABLE products (
    id SERIAL PRIMARY KEY NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    price INT NOT NULL, 
    category VARCHAR(100)
    );