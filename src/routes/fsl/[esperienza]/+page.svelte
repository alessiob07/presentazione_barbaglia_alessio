<script>
    let { data } = $props();
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
	import { page } from '$app/state';
</script>

<Grid direction="row" wrap class="h-full overflow-y-auto flex flex-col gap-2 p-10">
    {#each data.slides as x, i (x.id)}
        <Card 
                href="{base}/fsl/{page.params.esperienza}/{x.id}" 
                bg="text-cyan-950 border-cyan-950 bg-cyan-200 flex-grow flex-shrink basis-[30%] flex flex-col p-4" >
            <p class="w-full text-left font-bold">#{i+1}</p>
            <h1 class="w-full text-left">{x.meta?.titolo ?? x.id.toUpperCase()}</h1>
        </Card>
    {/each}
</Grid>