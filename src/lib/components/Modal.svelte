<script>
  let { show, onClose, Content } = $props();
</script>

{#if show}
  <dialog open onclose={onClose}>
    <button onclick={onClose}>Chiudi</button>
    
    {#if Content}
      <Content />
    {/if}
  </dialog>
{/if}