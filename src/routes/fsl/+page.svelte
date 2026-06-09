<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import GridMgr from '$lib/components/GridMgr.svelte';
</script>

<h1>Esperienze Formazione scuola lavoro</h1>

<GridMgr columns="grid-cols-2">
    {#each data.esperienze as exp (exp.id)}
        <Card href="/fsl/{exp.id}" bg="blu-1 blu-2">
            <h1 class="blu-2">{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
            <p class="blu-2">Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</GridMgr>
