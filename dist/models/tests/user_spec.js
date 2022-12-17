"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const user_store = new user_1.UserStore();
describe('User Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(user_store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(user_store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(user_store.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(user_store.authenticateUser).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(user_store.delete).toBeDefined();
    });
});
describe('user Table Model - Method Implementation Checks', () => {
    const user = {
        last_name: 'Mocco',
        first_name: 'Peyton',
        password: 'password'
    };
    it('should create a new user matching test user', async () => {
        const new_user = await user_store.create(user);
        expect(new_user.last_name).toEqual('Mocco');
        expect(new_user.first_name).toEqual('Peyton');
    });
    it('should return an index with the newly created user', async () => {
        const new_user_index = await user_store.index();
        expect(new_user_index).toBeDefined();
    });
});
