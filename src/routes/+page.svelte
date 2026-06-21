<script>
    import Grid from '$lib/components/Grid.svelte';
    import Card from '$lib/components/Card.svelte';
</script>
<Grid rows="auto 1fr">
<div>
    <h1>Alessio Barbaglia</h1>
    <p>5B Inf - I.T.S. Leonardo Da Vinci - Borgomanero</p>
</div>

<Grid cols="1fr 1fr">
    <Card href="/personale" bg="text-lime-950 border-lime-950 bg-lime-200">
        <h1>Presentazione Personale</h1>
        <p>La mia presentazione personale</p>
    </Card>

    <Card href="/fsl"  bg="text-cyan-950 border-cyan-950 bg-cyan-200" >
        <h1>Esperienze FSL</h1>
        <p>Il mio percorso formativo di Formazione Scuola lavoro</p>
    </Card>
</Grid>
</Grid>