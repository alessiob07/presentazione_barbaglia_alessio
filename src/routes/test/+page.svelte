<script>
  let columns = $state("1fr 2fr");
  let {children} = $props();
</script>

<div class="grid-container" style="--cols: 1fr 2fr; --rows 1">
  <div class="grid-container" style="--cols: 1fr; --rows: 1fr 1fr">
    <div class="gc"><p>Ciao 11!</p></div>
    <div class="gc"><p>Ciao 12!</p></div>
  </div>
  <div class="gc"><p>Ciao 2!</p></div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: var(--cols);
    grid-template-rows: var(--rows);
    gap: 10px;
    width: 100%;
    height: 100%;
    border-color: red;
    border-width: 2px;
  }

  .gc {
    border-color: green;
    border-width: 2px;
  }
</style>