<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar o componente Conteúdo</button>
    <TopoPadrao />
    <Conteudo v-if="visibilidade"/>
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao
  },
  data: () => ({
    visibilidade: true
  }),
  methods: {
    desmontarComponente() {
      this.visibilidade = false
    }
  }
}
</script>

<style scoped>
</style>
