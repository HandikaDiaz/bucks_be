import { Response } from 'express'
import * as productService from '../services/product-service'
import { CustomRequest } from '../libs/custom-request'
import uploader from '../libs/cloudinary'

export async function GetAllProduct(req: CustomRequest, res: Response) {
    try {
        const products = await productService.getAllProduct()
        res.json(products)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function GetProductById(req: CustomRequest, res: Response) {
    try {
        const id = parseInt(req.params.id)
        const product = await productService.getProductById(id)
        res.json(product)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function CreateProduct(req: CustomRequest, res: Response) {
    try {
        const body = req.body
        if (req.file) {
            body.image = await uploader(req.file)
        }
        const product = await productService.createProduct(body, req.user.id)
        res.json(product)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function UpdateProduct(req: CustomRequest, res: Response) {
    try {
        const body = req.body
        const user = req.user.id
        const id = parseInt(req.params.id)
        if (req.file) {
            body.image = await uploader(req.file)
        }
        const product = await productService.updateProduct(body, user, id)
        res.json(product)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

export async function DeleteProduct(req: CustomRequest, res: Response) {
    try {
        const id = parseInt(req.params.id)
        const product = await productService.deleteProduct(id)
        res.json(product)
    } catch (error) {
        console.log(error)
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}