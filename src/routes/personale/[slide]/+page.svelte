<script>
  import Grid from "$lib/components/Grid.svelte"
  import Card from "$lib/components/Card.svelte"
  import { page } from '$app/state';
  import { base } from '$app/paths';

  let { data } = $props();

  // 1. Trova l'ID attuale dai parametri della URL
  let currentId = $derived(page.params.slide);
  
  // 2. Trova l'indice attuale nella lista che arriva dal server
  let currentIndex = $derived(data.slides.findIndex(s => s.id === currentId));
  
  // 3. Calcola il prossimo ID in modo sicuro
  let nextSlide = $derived(
    currentIndex >= 0 && currentIndex < data.slides.length - 1 
      ? data.slides[currentIndex + 1] 
      : null
  );

   let prevSlide = $derived(
    currentIndex > 0 
      ? data.slides[currentIndex - 1] 
      : null
  );

  
</script>

<Grid direction="row" class="h-full gap-10 p-4" items="stretch">
  <div class="flex flex-col w-64 h-full"> 
    <div class="flex-none">
      <h1>Il mio titolo</h1>
      <p>Testo...</p>
    </div>

    <div class="flex-grow"></div>
    
    <Grid direction="row">
    {#if prevSlide}
      <Card href="{base}/personale/{prevSlide.id}" bg="flex-1 bg-rose-200 text-rose-950 border-rose-950 "><span class="material-symbols-outlined">arrow_back</span></Card>
    {/if}
    {#if nextSlide}
      <Card href="{base}/personale/{nextSlide.id}" bg="flex-1 bg-rose-200 text-rose-950 border-rose-950"><span class="material-symbols-outlined">arrow_forward</span></Card>
    {/if}
    </Grid>
</div>

  <div class="flex-1">
    <img src="../../img/file.jpg" alt="Errore" class="w-full h-full object-cover" />
  </div>

</Grid>