

export default class Cart {
    constructor(products){
        this.id;
        this.products = this.validateProducts(products);

    }

    validateProducts(products) {
        if (!Array.isArray(products)) {
            throw new Error('Los productos deben ser proporcionados en forma de array.');
        }

        const isValidProduct = (item) => {
            return (
                item &&
                typeof item === 'object' &&
                item.hasOwnProperty('product') &&
                typeof item.product === 'string' &&
                item.hasOwnProperty('quantity') &&
                typeof item.quantity === 'string'
            );
        };

        const isValid = products.every(isValidProduct);

        if (!isValid) {
            throw new Error('Los productos deben tener la estructura { product: string, quantity: string }.');
        }

        return products;
    }
}