<script>
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
    import { base } from '$app/paths';
</script>
<Grid rows="auto 1fr" class="h-full"> <div>
    <h1>Alessio Barbaglia</h1>
    <p>5B Inf - I.T.S. Leonardo Da Vinci - Borgomanero</p>
  </div>

  <Grid direction="row" wrap class="h-full overflow-y-auto flex flex-col gap-2 p-10">
    <Card href="{base}/personale/start" bg="text-lime-950 border-lime-950 bg-lime-200 flex-grow flex-shrink basis-[30%] flex flex-col p-4">
        <h1 class="w-full text-left font-bold" >Presentazione Personale</h1>
        <p class="w-full text-left" >La mia presentazione personale</p>
         <img src="{base}/img/code.png" class="object-contain h-300">
    </Card>

    <Card href="{base}/fsl" bg="text-cyan-950 border-cyan-950 bg-cyan-200 flex-grow flex-shrink basis-[30%] flex flex-col p-4">
        <h1 class="w-full text-left font-bold">Esperienze FSL</h1>
        <p class="w-full text-left">Il mio percorso formativo di Formazione Scuola lavoro</p>
        <img src="{base}/img/IMG_20250617_155621.jpg" class="object-contain h-300">
    </Card>
  </Grid>
</Grid>

