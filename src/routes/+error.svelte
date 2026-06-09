<script>
	import { page } from '$app/state';
</script>

<h1>Si è verificato un errore</h1>
<p>Stato HTTP: {page.status}</p>
<p>Messaggio: {page.error?.message}</p>