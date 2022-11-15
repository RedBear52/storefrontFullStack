import express from 'express'
import { ProductStore } from '../../models/product'

const productRoute = express.Router()

productRoute.get('/:id')
productRoute.get('/top_five')
productRoute.get('/:category')

export default productRoute