import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
    const { productId } = params;
    if (productId > 3) {
		throw error(404, { message: 'Product not found', hint: 'Try a different product' });
		// throw redirect(307, '/products');
	}
    const title = "Product details";
    const notification = 'End of season sale! 50% off!';

    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        title,
        product,
        notification
    };
}