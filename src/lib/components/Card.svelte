<script>
  import A from "$lib/components/A.svelte"

  let { href, bg = "bg-white", children, ...rest } = $props();
</script>

<A {href} style="box-shadow: 4px 4px 29px 1px #000000;" class="{bg} p-6 rounded-xl shadow-lg m-10 border border-slate-200 block transition hover:scale-[1.02]" {...rest}>
  {@render children()}
</A>