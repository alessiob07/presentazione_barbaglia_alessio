<script>
	import { page } from '$app/state';
</script>

<h1>Si è verificato un errore</h1>
<h1>Stato HTTP: {page.status}</h1>
<p>Messaggio: {page.error.message}</p>