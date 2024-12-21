import { ProductDto } from "../dto/product-dto";
import { prisma } from "../libs/prisma";

export async function findAllProduct() {
    return prisma.product.findMany({
        orderBy: {
            id: 'asc'
        }
    })
}

export async function findProductById(id: number) {
    return prisma.product.findUnique({
        where: { id }
    })
}

export async function createProduct(data: ProductDto, userId: number) {
    return prisma.product.create({
        data: {
            productName: data.productName,
            amount: data.amount,
            description: data.description,
            image: data.image,
            userId
        }
    })
}

export async function updateProduct(data: ProductDto, userId: number, id: number) {
    return prisma.product.update({
        where: {
            id
        },
        data: {
            productName: data.productName,
            amount: data.amount,
            description: data.description,
            image: data.image,
            userId
        }
    })
}

export async function deleteProduct(id: number) {
    return prisma.product.delete({
        where: { id }
    })
}