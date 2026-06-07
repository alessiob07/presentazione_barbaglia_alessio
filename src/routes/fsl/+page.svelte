<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
</script>

<h1>Esperienze Formazione scuola lavoro</h1>

<Grid>
    {#each data.esperienze as exp}
        <Card href="/fsl/{exp.id}" bg="bg-blue-600">
            <h1 class="text-white text-3xl font-black">{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
            <p class="text-blue-100 mt-2">Scrivere poi qua i metadati che voglio leggere. Ricordati del fallback con '??'.</p>
        </Card>
    {/each}
</Grid>