<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <!-- Usando as props recebidas do componente filho (ListaVagas) e customizando a sua exibição (que substituirá o slot do componente filho) -->
    <!-- <lista-vagas v-slot:default="slotProps">
      <div v-for="(vaga, index) in slotProps.vagas" :key="index">
        <h4>{{ vaga.titulo }}</h4>
        <p>{{ vaga.descricao }}</p>
      </div>
    </lista-vagas> -->

    <!-- Usando o componente padrão (sem utilizar as props recebidas via slot do componente filho) e sem substituir o template do slot do componente -->
    <lista-vagas></lista-vagas> 

    <div class="row mt-5">
      <div class="col-4">
        <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador>
      </div>
      <div class="col-4">
        <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue';
import ListaVagas from '@/components/comuns/ListaVagas.vue';
import Indicador from '@/components/comuns/Indicador.vue'

export default {
  name: 'Home',
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101) //Randômico entre 0 e 100
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000) //a cada 1 segundo essa função será executada
  },
}
</script>
