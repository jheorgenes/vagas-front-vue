<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo: {{ tipo }} |
        Publicação: {{ publicacao }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vaga',
  // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao'],
  props: {
    titulo: String,
    descricao: String,
    salario: [Number, String],
    modalidade: String,
    tipo: String,
    publicacao: String,
  },
  created() {
    console.log('titulo', typeof this.titulo);
    console.log('descricao', typeof this.descricao);
    console.log('salario', typeof this.salario);
    console.log('modalidade', typeof this.modalidade);
    console.log('tipo', typeof this.tipo);
    console.log('publicacao', typeof this.publicacao);
  }
}
</script>

<style>
</style>
