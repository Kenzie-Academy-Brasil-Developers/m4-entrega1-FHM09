export interface IProduct{
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductList {
    createProduct(data: TCreateProductData): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: TCreateProductData): TUpdateProductData;
    deleteProduct(id: number): IMessage;
}

export interface IMessage{
    message: string;
}

export type TCreateProductData = Pick<IProduct, "name" | "price">;
export type TUpdateProductData = Partial<TCreateProductData>;