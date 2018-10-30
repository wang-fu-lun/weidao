export default {
  toggleTabbar (state, show = true) {
    state.isShowTabbar = show
  },
  updateCart (state, newCart) {
    state.cart = newCart
  }
}
