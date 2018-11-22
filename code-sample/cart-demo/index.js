class Cart {
    constructor() {
        this.products = [
            {
                productCode: "White Cap",
                quantity: 2
            },
            {
                productCode: "Black Cap",
                quantity: 3
            },
            {
                productCode: "Blue Cap",
                quantity: 4
            }
        ]
    }

    addProduct(productCode, quantity) {
        // 1. cari
        let target = 0 //cari index
        let result = this.products.find(function (product, index) { //cari barang yang sudah ada
            target = index
            return product.productCode === productCode
        })

        // Barang udah ada
        if (result !== undefined) {
            // this.products[target].quantity = this.products[target].quantity + quantity
            // sama --------------------
            this.products[target].quantity += quantity
        } else {//barang tidak ketemu
            this.products.push({
                productCode: productCode,
                quantity: quantity
            })
        }


    }

}

const cart = new Cart();



// Data Structure ---------------------------------------------------
// this.products = [
//     {
//         productCode: "White Cap",
//         quantity: 2
//     },
//     {
//         productCode: "Black Cap",
//         quantity: 3
//     }
// ]