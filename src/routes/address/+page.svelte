<script>
    let adderss = '';
    export let data;
    const { addressList } = data;
</script>

<h1>Select your address</h1>

<select bind:value={adderss} name="" id="">
    <option value="">Pick an address</option>
    {#each addressList as addressItem}
        <option value={addressItem}>{addressItem}</option>
    {/each}
</select>