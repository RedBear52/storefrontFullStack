CREATE TABLE order_products (
    id SERIAL PRIMARY KEY, 
    orderId INT, 
    FOREIGN KEY (orderId) REFERENCES orders (id), 
    productId INT, 
    FOREIGN KEY (productId) REFERENCES products (id), 
    quantity INT NOT NULL 
    );