<template>
  <div>
    <div class="divVagasFavoritas">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritadas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">{{ vaga }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VagasFavoritas',
  data: () => ({
    vagas: []
  }),
  mounted() {
    //Escutando um evento global com a a função on. O nome da função deve ser o mesmo emitido e ele também executa uma função de callback
    this.emitter.on('favoritarVaga', (titulo) => { 
      this.vagas.push(titulo);
    })

    this.emitter.on('desfavoritarVaga', (titulo) => {
      let indiceArray = this.vagas.indexOf(titulo); //Busca no array o índice onde o valor de titulo for encontrado
      if(indiceArray !== -1) {  //Se for diferente de -1 significa que achou um índice
        this.vagas.splice(indiceArray, 1); //remove um elemento à partir de um índice do array
      }
    })
  }
}
</script>

<style scoped>
  .divVagasFavoritas {
    position: absolute; 
    z-index: 1; 
    top: 70px; 
    right: 0px;
  }
</style>