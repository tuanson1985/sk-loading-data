import Product from './product.svelte';

export const load = async (loadEvent) => {
    console.log("Load function called in page.js");
    const { fetch, data } = loadEvent;
    const title = "List of available products";
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    return {
        ...data,
        Component: Product
    };
}