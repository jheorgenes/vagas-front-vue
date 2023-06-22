<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>

    <!-- renderizar de modo dinâmico os componentes home e publicar-vaga -->
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!-- <home></home> -->
    <!-- <publicar-vaga></publicar-vaga> -->
    <component :is="conteudo" />
  </div>
</template>

<script>
import Home from '@/components/views/Home.vue';
import PublicarVaga from '@/components/views/PublicarVaga.vue'

export default {
  name: 'Conteudo',
  components: {
    Home,
    PublicarVaga
  },
  data:() => ({
    teste: 'O componente foi criado',
    titulo: 'Componente Conteudo',
    conteudo: 'home'
  }),
  methods: {
    atualizarComponente(){
      this.titulo += '*'
    }
  },
  beforeCreate() {
    console.log('Antes do criar -', this.teste);
  },
  created() {
    console.log('Criado -', this.teste);
  },
  beforeMount() {
    console.log('Antes de montar o template');
  },
  mounted() {
    console.log('Montado');
  },
  beforeUpdate() {
    console.log('Antes de atualizar');
  },
  updated() {
    console.log('Atualizado');
  },
  beforeUnmount() {
    console.log('Antes de desmontar/destruir');
  },
  unmounted() {
    console.log('Desmontado/destruído');
  },
  /*
  errorCaptured() {
    console.log('Erro capturado');
  },
  renderTracked() {
    console.log('Re-renderização rastreada');
  },
  renderTriggered() {
    console.log('Re-renderização acionada');
  },
  activated(){
    console.log('Componente é ativado');
  },
  deactivated() {
    console.log('Componente é desativado');
  }
  */
}
</script>

<style>

</style>
