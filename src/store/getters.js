export default {
  // 总金额
  totalMoney (state) {
    let sum = 0
    state.cart.forEach(curr => {
      sum += curr.price * curr.amount
    })
    return sum.toFixed(2)
  },
  // 小圆点
  cartCount (state) {
    return state.cart.reduce((total, item) => {
      total += item.amount
      return total
    }, 0)
  }
}
