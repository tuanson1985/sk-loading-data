// import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const { productId } = params;
    if(productId > 3) {
        // throw error(404, 'Product not found');//tra ve chuoi
        // throw error(404, {
        //     message: 'Product not found',
        //     url: 'products'
        // });
        throw redirect(307, '/products');
    }
    const title = "Product details";
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        title,
        product
    };
}