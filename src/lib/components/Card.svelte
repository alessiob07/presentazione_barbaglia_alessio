<script>
  import A from "$lib/components/A.svelte"

  let { href, bg = "bg-white", children, ...rest } = $props();
</script>

<A {href} class="{bg} p-6 rounded-xl shadow-lg m-10 border border-slate-200 block transition hover:scale-[1.02]" {...rest}>
  {@render children()}
</A>