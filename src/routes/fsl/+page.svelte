<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
</script>

<h1>Esperienze Formazione scuola lavoro</h1>

<Grid>
    {#each data.esperienze as exp}
        <Card href="/fsl/{exp.id}" bg="blu-1 blu-2">
            <h1 bg="blu-2">{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
            <p bg="blu-2">Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</Grid>
