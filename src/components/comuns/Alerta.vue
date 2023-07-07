<template>
  <div class="alert alert-success" role="alert">
    <slot name="titulo"></slot> <!-- Slot nomeado sendo exibido -->
    <hr>
    <slot></slot> <!-- Slot padrão sendo exibido -->
  </div>
</template>

<script>
  export default {
    name: 'Alerta'
  }
</script>

