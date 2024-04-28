<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<a href={$page.error.url}>Quay lại</a>