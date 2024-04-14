import { IMessage, IProduct, IProductList, TCreateProductData } from "./interfaces";


class ProductList implements IProductList{
    private productList: IProduct[] = [];
    private id = 1;

    createProduct(data: TCreateProductData): IProduct {
        const now = new Date();

        const newProduct: IProduct = {
            id: this.id,
            ...data,
            createdAt: now,
            updatedAt: now,
        }

        this.productList.push(newProduct);

        this.id++;

        return newProduct;
    }

    getProducts(): IProduct[] {
        return this.productList
    }

    getOneProduct(id: number): IProduct | undefined {
        const product = this.productList.find(product => product.id === id);

        if(!product){
            return "Product not found.";
        }

        return product;
    }

    updateProduct(id: number, data: TCreateProductData): Partial<TCreateProductData> {
        const currentProduct = this.productList.find(product => product.id === id);

        if(!currentProduct){
            return "Product not found."
        }

        const now = new Date();

        const updateProduct: IProduct = { ...currentProduct, ...data, updatedAt: now };

        const index = this.productList.findIndex(product => product.id === id);

        this.productList.splice(index, 1, updateProduct);

        return updateProduct
    }

    deleteProduct(id: number): IMessage {
        const index = this.productList.findIndex(product => product.id === id);

        if(index === -1){
            return "Product not found."
        }

        this.productList.splice(index, 1);

        return { message: "Product successfully deleted."};
    }
}

export const productList = new ProductList();
