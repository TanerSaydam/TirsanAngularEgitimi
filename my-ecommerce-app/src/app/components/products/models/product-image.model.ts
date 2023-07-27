import { ProductModel } from "./product.model";

export class ProductImageModel{
    id: number = 0;
    productId: number = 0;
    product: ProductModel = new ProductModel();
    imageUrl: string = "";
}