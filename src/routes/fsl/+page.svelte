

<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
</script>

<Grid direction="row" wrap class="h-full overflow-y-auto flex flex-col gap-2 p-10">
    {#each data.esperienze as exp (exp.id)}
        <Card 
  href="{base}/fsl/{exp.id}/start" bg="text-cyan-950 border-cyan-950 bg-cyan-200 flex-grow flex-shrink basis-[30%] flex flex-col p-4" >
    <h1 class="w-full text-left">{exp.meta?.titolo ?? exp.id.toUpperCase()}</h1>
</Card>
    {/each}
</Grid>
