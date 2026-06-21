<script>
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { page } from '$app/state'
  import Grid from "$lib/components/Grid.svelte"
  import Card from "$lib/components/Card.svelte"

  let isHome = $derived(page.url.pathname === '/presentazione_barbaglia_alessio/')
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Grid direction="col" class="h-screen w-screen bg-taupe-200 text-gray-900 font-sans overflow-hidden px-22 py-8">
    
    {#if !isHome}
      <header class="flex-none">
          <Grid direction="row" class="items-center gap-6">
            <Card href="../" bg="bg-rose-200 text-rose-950 border-rose-950">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined">arrow_back</span>
                <b class="translate-y-[1px]">Indietro</b>
              </div>
            </Card>
            <h1 class="flex-1">{page.data.titolo ?? "Presentazione Barbaglia Alessio"}</h1>
          </Grid>
      </header>
    {/if}

    <main class="flex-1 overflow-hidden">
        {@render children()}
    </main>

</Grid>