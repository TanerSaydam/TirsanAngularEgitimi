import { ProductImageModel } from "./product-image.model";

export class ProductModel{
    id: number = 0;
    name: string = "";
    stock: number = 0;
    price: number = 0;
    mainImageUrl: string = "";
    productImages: ProductImageModel[] = [];
}