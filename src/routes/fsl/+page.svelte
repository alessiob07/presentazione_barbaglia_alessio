<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';

    import { onMount } from 'svelte';
    onMount(() => { document.getElementById('page-title').innerText = "Contattaci" });
</script>



<Grid cols="1fr 1fr">
    {#each data.esperienze as exp}
        <Card href="/fsl/{exp.id}" bg="text-cyan-950 border-cyan-950 bg-cyan-200">
            <h1 bg="blu-2">{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
            <p bg="blu-2">Scrivere poi qua i metadati che voglio leggere.</p>
        </Card>
    {/each}
</Grid>
