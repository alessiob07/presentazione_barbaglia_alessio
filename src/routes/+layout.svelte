<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
 import { page } from '$app/state'

 let isHome = $derived($page.url.pathname === '/')

	let { children } = $props();

	import A from '$lib/components/A.svelte';
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
{#if !isHome}
  <nav class="p-6 border-b border-slate-200">
    <A href="../" class="font-bold text-xl">Indietro</A>
  </nav>
{/if}
  <main>
    {@render children()}
  </main>
</div>


