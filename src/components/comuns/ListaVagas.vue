<template>

  <slot :vagas="vagas"> <!-- Enviando props do slot diretamente para o componente pai (que no caso é o home) -->
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
      </div>
    </div>
  </slot>

  <!-- Enviando para o componente pai (HOME) props que poderiam ser customizadas para melhor exibição do componente. -->
  <!-- <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé lista', paginacao: { nroPaginas: 10, paginaAtual: 5 } }">
    <p>O rodapé da lista de vagas</p>
  </slot> -->

</template>

<script>
import Vaga from '@/components/comuns/Vaga.vue'

export default {
  name: 'ListaVagas',
  data: () => ({
    vagas: []
  }),
  components: {
    Vaga
  },  
  activated() {
    //Quando o keepAlive ativar o componnente novamente, vai reatualizar a lista de vagas
    this.vagas = JSON.parse(localStorage.getItem('vagas')); 
  },
  mounted(){
    this.emitter.on('filtrarVagas', vaga => {
      const vagas = JSON.parse(localStorage.getItem('vagas'));
      this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
    });
  }
}
</script>