<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
</script>

<Grid direction="row" wrap class="h-full overflow-y-auto">
    {#each data.slides as x (x.id)}
        <Card href="{base}/personale/{x.id}" bg="text-lime-950 border-lime-950 bg-lime-200 flex-grow flex-shrink basis-[30%] ">
            <h1>{x.meta?.titolo ?? x.id.toUpperCase()}</h1>
            <p>Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</Grid>