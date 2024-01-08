

const products =[ 
        {
            id: "1" ,
            name: "Botines Nike" ,
            price: "89.000" ,
            category: "Botines" ,
            img: "/src/components/Item/assets/mercurial.jpg" ,
            stock: 20 ,
            description: "descripcion Botines"
        } ,
        {
            id: "2" , name: "Botines Adidas" , price: "90.000" , category: "Botines" , img: "/src/components/Item/assets/adidasx.jpg" , stock: 30 , description: "descionpcion Botines"
        } ,
        {
            id: "3" , name: "Botines Puma" , price: "85.000" , category: "Botines" , img: "/src/components/Item/assets/botinespuma.jpg" , stock: 25 , description: "descripcion Botines"
        } 
    ]

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 500)
        })
    }

    export const getProductById = (productId) => {

        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve (products.find(prod=>prod.id === productId))
            }, 500)
        })

    }

    export const getProductByCategory = (category) => {

        return new Promise((resolve) => {
            const filteredProducts = products.filter(
                (product) => product.category.toLowerCase() === category.toLowerCase()
            );
    
        setTimeout(() => {
            resolve(filteredProducts);
            }, 500);
        });
    };