CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    userId INT, 
    FOREIGN KEY (userId) REFERENCES users (id), 
    orderStatus VARCHAR(15)
    );