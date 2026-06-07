<script>
    let { data } = $props();
</script>

<h1>Esperienza con titolo: {data.meta.titolo}</h1>
<p>Qui in futuro caricheremo il Markdown per {data.filename}!</p>
<h1>Contenuto del file md: metadati:</h1>
<p>{JSON.stringify(data,null)}</p>
<h1>Contenuto del file md: contenuto</h1>
{@render data.content()}