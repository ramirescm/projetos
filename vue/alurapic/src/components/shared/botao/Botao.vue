<template>
    <button @click="disparaAcao()" class="botao" :class="estiloBotao" type="tipo">
        {{ rotulo }}</button>
</template>
<script>
export default {
    //['tipo', 'rotulo', 'confirmacao', 'valor', 'estilo']
    props: {
        tipo: {
            required: true,
            type: String,
        },
        rotulo: {
            required: true,
            type: String,
        },
        confirmacao: {
            type: Boolean
        },
        valor: {
            type: String
        },
        estilo: {
            type: String
        }

    },

    methods: {
        disparaAcao() {
            if (this.confirmacao) {
                if (confirm('Deseja excluir ' + this.valor + '?')) {
                    this.$emit('botaoAtivado');
                }

                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloBotao() {
            if ('padrao' == this.estilo) return 'botao-padrao';
            if ('perigo' == this.estilo) return 'botao-perigo';
        }
    }
}
</script>
<style scoped lang="sass">
@import './Botao.scss'
</style>


