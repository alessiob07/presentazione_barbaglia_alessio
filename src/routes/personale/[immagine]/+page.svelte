<script>
    let { data } = $props();
    let next = $derived(Number(data.meta.name) + 1)
    let pre = $derived(Number(data.meta.name) - 1)
</script>

<h1>{data.meta.titolo}</h1>

<br>
{@render data.content()}

<img src={data.meta.img1} alt="Impossibile caricare l'immagine">

<a href="../{pre}/">Precedente</a>
<a href="../{next}/">Successivo</a>