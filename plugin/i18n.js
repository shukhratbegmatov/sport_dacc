export const actions = {
    nuxtServerInit({ commit }) {
        commit('LOCALE', this.$i18n.locale)
    }
}