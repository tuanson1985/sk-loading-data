<script>
    export let data;
    const username = data.username
    const title = data.title;
    const featureProduct = data.featureProduct
</script>
<slot />
<h1>{ data.title }</h1>
{#each  featureProduct as product}
    <div class="product-item">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
    <hr>
{/each}

<style>
	.product-item {
		display: inline-block;
		width: 200px;
		height: 100vh;
		margin: 10px;
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>