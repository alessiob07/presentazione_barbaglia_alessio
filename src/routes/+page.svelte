<script>
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
</script>

<h1>Alessio Barbaglia</h1>
<p>5B Inf - I.T.S. Leonardo Da Vinci - Borgomanero</p>

<Grid>
    <Card href="/personale" bg="bg-slate-900">
        <h1 class="text-white text-5xl font-black">Presentazione Personale</h1>
        <p class="text-slate-300 mt-4 text-xl">La mia presentazione personale</p>
    </Card>

    <Card href="/fsl" bg="bg-blue-600">
        <h1 class="text-white text-5xl font-black">Esperienze FSL</h1>
        <p class="text-blue-100 mt-4 text-xl">Il mio percorso formativo di Formazione Scuola lavoro</p>
    </Card>
</Grid>