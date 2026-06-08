<script>
    let { cols = "grid-cols-2", children } = $props();

</script>

<div class="grid {cols} w-full h-auto">
    {@render children()}
</div>