<template>
  <div>
    <VagasFavoritas />
    <TopoPadrao @navegar="componente = $event" /><!-- Recebe de TopoPadrao o valor de componente -->
    <Alerta v-if="exibirAlerta">
      <template v-slot:titulo> <!-- Slot nomeado sendo enviado -->
        <h5>Titulo do alerta</h5>
      </template>
      <p>Descrição do alerta</p> <!-- Slot Padrão sendo enviado -->
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
    exibirAlerta: false
  }),
  components: {
    Conteudo,
    VagasFavoritas,
    TopoPadrao,
    Alerta
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true;
      setTimeout(() => this.exibirAlerta = false, 4000);
      console.log('Apresentar a mensagem de alerta customizada');
    })
  }
}
</script>

<style scoped>
</style>
