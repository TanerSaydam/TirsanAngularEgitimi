export class ProductModel{
    id: string = "";
    name: string = "";
    stock: number = 0;
    price: number = 0;
    mainImageUrl: string ="";
    productImages:ProductImageModel[] = []
}

export class ProductImageModel{
    id: number =0;
    imageUrl: string = "";
    productId: string = "";
}