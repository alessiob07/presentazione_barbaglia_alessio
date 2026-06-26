<script>
  let { href, bg = "bg-white", children, class: className = "", ...rest } = $props();
</script>

<a 
  href={href} 
  style="box-shadow: 4px 4px 29px 1px #000000;" 
  class="{bg} px-4 py-3 m-1 rounded-xl shadow-lg border-2 block transition hover:scale-[1.05] flex {className}" 
  {...rest}
>
  {@render children()}
</a>