import express from 'express'
import  { index } from '../../handlers/products'
import  { show }from '../../handlers/products'
import  { create } from '../../handlers/products'
import { category } from '../../handlers/products'

const productRoute = express.Router()

productRoute.get('/', index)
productRoute.get('/:id', show)
productRoute.post('/', create)
productRoute.get('/category/:category', category)

export default productRoute