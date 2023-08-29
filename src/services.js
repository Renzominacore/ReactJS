const products = [
    {id:"1", name: "Littman", price: 49000, category: "estetoscopios"},
    {id:"2", name: "Melipal", price: 20000, category:"estetoscopios"},
    {id:"3", name:"Omron", price: 25000, category:"tensiometros"},
    {id:"4", name:"Medisana", price: 24300, category:"tensiometros"},
    {id:"5", name:"Yonker", price:19500, category:"oximetros"},
    {id:"6", name:"Beurer",price:18000, category:"oximetros"},
    {id:"7", name:"Philco",price:7300, category:"termometros"},
    {id:"8", name:"Beurer",price:7600,category:"termometros"}
];

 export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const product = products.find(p => p.id == id)
            if (product){
                resolve(product)
            }else{
                reject('No existe el producto buscado')
            }
        },1000)
    })
}

export const getProducts= () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const productsFiltered=category ? products.filter(product=>product.category==category) : products;
            resolve(productsFiltered);
        },1000)
    })
}