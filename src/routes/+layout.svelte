<script>
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { page } from '$app/state'
  import Grid from "$lib/components/Grid.svelte"
  import Card from "$lib/components/Card.svelte"

  let isHome = $derived(page.url.pathname === '/presentazione_barbaglia_alessio/')
  let { children, data } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans col flex flex-col">
  
  <div class="px-22 py-8 w-full h-full box-border flex-1">
    
    <Grid rows="auto 1fr">
      <div>
        {#if !isHome}
        <Grid cols="auto 5fr">
            <Card href="../" bg="bg-rose-200 text-rose-950 border-rose-950">
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined">arrow_back</span>
                  <b class="translate-y-[1px]">Indietro</b>
                </div>
            </Card>

            <h1>{page.data.titolo ?? "Presentazione Barbaglia Alessio"}</h1>
        </Grid>
        {/if}
      </div>
      <main>
        {@render children()}
      </main>
    </Grid>

  </div>
</div>