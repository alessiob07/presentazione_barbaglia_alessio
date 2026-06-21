<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
</script>



<Grid cols="1fr 1fr">
    {#each data.slides as x (x.id)}
        <Card href="/personale/{x.id}" bg="text-lime-950 border-lime-950 bg-lime-200">
            <h1>{x.meta?.titolo ?? x.id.toUpperCase()}</h1>
            <p>Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</Grid>
