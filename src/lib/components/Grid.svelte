<script>
  let { cols = "1fr", rows = "1fr", children, ...rest } = $props();
</script>

<div class="grid-layout flex items-center" style="--cols: {cols}; --rows: {rows}" {...rest}>
  {@render children()}
</div>

<style>
  .grid-layout {
    display: grid;
    grid-template-columns: var(--cols);
    grid-template-rows: var(--rows);
    gap: 40px 30px;
    align-items: center; 
  }
</style>