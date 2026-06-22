<script>
  let { 
    children, 
    class: className = "", 
    direction = "col", 
    wrap = false,
    justify = "start", 
    items = "start",   
    ...rest 
  } = $props();
</script>

<div 
  class="flex 
         {direction === 'col' ? 'flex-col' : 'flex-row'} 
         {wrap ? 'flex-wrap' : ''} 
         justify-{justify} 
         items-{items} 
         {className}" 
  {...rest}
>
  {@render children()}
</div>