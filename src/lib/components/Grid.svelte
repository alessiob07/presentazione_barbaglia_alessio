<script>
  let { 
    children, 
    class: className = "", 
    direction = "col", 
    wrap = false,
    justify = "start", // Aggiunto!
    items = "start",   // Aggiunto!
    ...rest 
  } = $props();
</script>

<div 
  class="flex 
         {direction === 'col' ? 'flex-col' : 'flex-row'} 
         {wrap ? 'flex-wrap' : ''} 
         justify-{justify} 
         items-{items}
         p-4 
         gap-3
         {className}" 
  {...rest}
>
  {@render children()}
</div>