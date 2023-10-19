async function productlist() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page() {
    let products = await productlist();
    console.log(products)
    return (
        <>
            <h1>Product List</h1>
            {
                products.map((item) => {
                    return (
                        <h2>NAME: {item.title}</h2>)
                })
            }
        </>
    );
};