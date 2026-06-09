<script>
  import { resolve } from '$app/paths';
  let { href, bg = "bg-white", children, ...rest } = $props();
</script>

<a 
  href={resolve(href)} 
  style="box-shadow: 4px 4px 29px 1px #000000;" 
  class="{bg} p-8 rounded-2xl border-2 border-black block transition hover:scale-[1.02] active:scale-[0.98] w-full min-h-[200px]" 
  {...rest}
>
  {@render children()}
</a>