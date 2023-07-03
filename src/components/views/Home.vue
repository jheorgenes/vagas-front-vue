<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <!-- <vaga 
          :titulo="vaga.titulo"
          :descricao="vaga.descricao"
          :salario="vaga.salario"
          :modalidade="vaga.modalidade"
          :tipo="vaga.tipo"
          :publicacao="vaga.publicacao"
        /> -->
        <vaga v-bind="vaga" /><!-- Enviando o objeto inteiro -->
      </div>
    </div>
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
import Indicador from '@/components/comuns/Indicador.vue'
import Vaga from '@/components/comuns/Vaga.vue'

export default {
  name: 'Home',
  components: {
    PesquisarVaga,
    Indicador,
    Vaga
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: []
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101) //Randômico entre 0 e 100
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000) //a cada 1 segundo essa função será executada
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'));
  }
}
</script>

<style scoped>
</style>
