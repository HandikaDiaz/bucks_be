import { ProductDto } from '../dto/product-dto'
import * as productRepo from '../repositories/product-repo'

export async function getAllProduct() {
    const products = await productRepo.findAllProduct()
    if (!products) {
        throw new Error("Product not found")
    }
    return products
}

export async function getProductById(id: number) {
    const product = await productRepo.findProductById(id)
    if (!product) {
        throw new Error("Product not found")
    }
    return product
}

export async function createProduct(data: ProductDto, userId: number) {
    const product = await productRepo.createProduct({ ...data, amount: Number(data.amount) }, userId)
    if (!product) {
        throw new Error("Product not created")
    }
    return product
}

export async function updateProduct(data: ProductDto, userId: number, id: number) {
    const product = await productRepo.findProductById(id)
    if (!product) {
        throw new Error("Product not found")
    }

    const updateData = {
        id: product.id,
        productName: data.productName || product.productName,
        amount: Number(data.amount) || product.amount,
        description: data.description || product.description,
        image: data.image || product.image,
        userId
    }
    const updateProduct = await productRepo.updateProduct(updateData, userId, id)
    if (!updateProduct) {
        throw new Error("Product not updated")
    }
    return updateProduct
}

export async function deleteProduct(id: number) {
    const product = await productRepo.deleteProduct(id)
    if (!product) {
        throw new Error("Product not deleted")
    }
    return product
}