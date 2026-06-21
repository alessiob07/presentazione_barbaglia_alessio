<script>
    let { data } = $props();
</script>

<h1>Titolo della slide dal metadato: {data.meta.titolo}</h1>

<br>
<p>Contenuto trovato:</p>
{@render data.content()}