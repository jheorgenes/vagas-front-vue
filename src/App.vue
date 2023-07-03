<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar o componente Conteúdo</button>
    <!-- <TopoPadrao @nomeDoEventoQueSeraCapturadoNoComponentePai="acao($event)" /> --><!-- Capturando um objeto ou uma string.. etc. -->
    <TopoPadrao @nomeDoEventoQueSeraCapturadoNoComponentePai="$event('Texto 1', 125)" /> <!-- Capturando a função de callback -->
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
    },
    acao(event) {
      console.log(event.msg);
    }
  }
}
</script>

<style scoped>
</style>
