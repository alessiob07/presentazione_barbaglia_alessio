<script>
    let { cols = "grid-cols-2", children } = $props();

</script>

<div class="grid {cols} min-h-screen w-full">
    {@render children()}
</div>