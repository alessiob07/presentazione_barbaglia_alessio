<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import A from '$lib/components/A.svelte';
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
  <nav class="p-6 border-b border-slate-200">
    <A href="/" class="font-bold text-xl">Home</A>
  </nav>
  <main>
    {@render children()}
  </main>
</div>


