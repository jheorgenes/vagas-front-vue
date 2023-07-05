import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

//Criar a instância do pacote mitt
const emitter = mitt()

//Iniciar a instância do vue com base no componente
// createApp(App).mount('#app')
const app = createApp(App);

//Configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componente dentro do app
app.config.globalProperties.emitter = emitter;

//Associar a instância do vue com o elemento html de id app
app.mount('#app');