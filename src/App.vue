<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" /><!-- Recebe de TopoPadrao o valor de componente -->
    <Conteudo v-if="visibilidade" :conteudo="componente" /><!-- Envia componente para conteúdo -->
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    VagasFavoritas,
    TopoPadrao,
  },
  data: () => ({
    visibilidade: true,
    componente: 'Home'
  })
}
</script>

<style scoped>
</style>
