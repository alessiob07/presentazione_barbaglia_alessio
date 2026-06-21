<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
</script>

<Grid direction="row" wrap class="h-full overflow-y-auto">
    {#each data.esperienze as exp (exp.id)}
        <Card href="{base}/fsl/{exp.id}" bg="text-cyan-950 border-cyan-950 bg-cyan-200 flex-grow flex-shrink basis-[30%] ">
            <h1>{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
            <p>Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</Grid>
