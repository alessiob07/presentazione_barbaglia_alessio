<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
 import { page } from '$app/state'
 import Card from "$lib/components/Card.svelte"

 let isHome = $derived(page.url.pathname === '/presentazione_barbaglia_alessio/')

	let { children } = $props();
</script>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans col">
{#if !isHome}

    <a href="../" class="box">
    <span class="material-symbols-outlined content-center"> arrow_back </span> <b>Indietro</b>
    </a>

    
    <br>
{/if}
  <main>
    {@render children()}
  </main>
</div>


