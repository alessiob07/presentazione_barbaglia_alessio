<script>
  let { columns = "grid-cols-1", gap = "gap-4", children, ...props } = $props();
</script>

<div class="grid {columns} {gap}" {...props}>
  {@render children()}
</div>