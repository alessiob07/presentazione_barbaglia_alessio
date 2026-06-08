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

<a href="../" bg="bg-blue-600" class="size-16">
<div class="box font-bold" style="background-color: #F8C7CC">     
    <span class="material-symbols-outlined"> arrow_back </span> Indietro
</div>
</a>

    
    <br>
{/if}
  <main>
    {@render children()}
  </main>
</div>


