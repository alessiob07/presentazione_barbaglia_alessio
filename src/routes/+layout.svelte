<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
 import { page } from '$app/state'
 import Card from "$lib/components/Card.svelte"

	let { children } = $props();
</script>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans col">
  <main>
    {@render children()}
  </main>
</div>


