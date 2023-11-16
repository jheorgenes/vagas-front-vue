<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" /><!-- Recebe de TopoPadrao o valor de componente -->
    <Alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p> 
    </Alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente" /><!-- Envia componente para conteúdo -->
  </div>
</template>

<script>
import Alerta from '@/components/comuns/Alerta.vue'
import Conteudo from '@/components/layouts/Conteudo.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: { tipo: '', titulo: '', descricao: '' }
  }),
  components: {
    Conteudo,
    VagasFavoritas,
    TopoPadrao,
    Alerta
  },
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a; //Pegando o objeto de alerta que veio do emissor e jogando nessa propriedade
      this.exibirAlerta = true;
      setTimeout(() => this.exibirAlerta = false, 4000);
    })
  }
}
</script>
