<script>
    let { data } = $props();
</script>

<h1>{data.current.meta.titolo}</h1>

<br>
{@render data.current.content()}

<img src={data.current.meta.img1} alt="Impossibile caricare l'immagine">

{#if data.prev}
    <a href="/personale/{data.prev.id}/">Precedente</a>
{/if}

{#if data.next}
    <a href="/personale/{data.next.id}/">Successivo</a>
{/if}