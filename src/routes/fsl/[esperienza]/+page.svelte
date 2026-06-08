<script>
    let { data } = $props();
</script>

<h1>Esperienza presso: {data.meta.titolo}</h1>
<p>Data: {data.meta.data}</p>

<br>
{@render data.content()}