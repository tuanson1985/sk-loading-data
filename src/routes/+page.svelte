<script>
	import { goto, preloadData } from '$app/navigation';
	export let data;
</script>

<h1 class="tall">Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/products" data-sveltekit-preload-data="off">Products</a>
