<script>
    import GridMgr from '$lib/components/GridMgr.svelte';
    import Card from '$lib/components/Card.svelte';
</script>
<h1>Alessio Barbaglia</h1>
<p>5B Inf - I.T.S. Leonardo Da Vinci - Borgomanero</p>

<div class="grid-container">
  <header>La mia barra del titolo (altezza dinamica)</header>
  <main>
    <GridMgr columns="grid-cols-2">
    <Card href="/personale" bg="ver-1 ver-2">
        <h1 class="ver-2">Presentazione Personale</h1>
        <p class="ver-2">La mia presentazione personale</p>
    </Card>

    <Card href="/fsl"  bg="blu-1 blu-2" >
        <h1 class="blu-2">Esperienze FSL</h1>
        <p class="blu-2">Il mio percorso formativo di Formazione Scuola lavoro</p>
    </Card>
</GridMgr>
</main>
</div>