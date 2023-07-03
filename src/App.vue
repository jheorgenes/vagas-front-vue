<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar o componente Conteúdo</button>
    <TopoPadrao @navegar="componente = $event" /><!-- Recebe de TopoPadrao o valor de componente -->
    <Conteudo v-if="visibilidade" :conteudo="componente" /><!-- Envia componente para conteúdo -->
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
    visibilidade: true,
    componente: 'Home'
  }),
  methods: {
    desmontarComponente() {
      this.visibilidade = false
    },
    acao(p1, p2) {
      console.log('Função de callback definida no componente Pai e chamada no componente Filho');
      console.log('P1: ',p1);
      console.log('P2: ',p2);
    }
  }
}
</script>

<style scoped>
</style>
