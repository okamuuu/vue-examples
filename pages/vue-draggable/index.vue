<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Vue.Draggable Demo</h1>
          <p>Demo for Meguro.es#21 at Vizasq</p>
          <p>Tokyo/Japan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
em {
  font-style: normal;
  background: linear-gradient(transparent 75%, #89BDDE 0%);
}

.ghost,
.sortable-chosen {
  color: #fff;
  background-color: #3273dc;
}
.movable {
  cursor: move;
}
p {
   transition: width 2s;
}
p, pre {
  font-size: 1.5em;
}
</style>
