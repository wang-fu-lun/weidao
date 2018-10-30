export default {
  addCart (context, currProduct) {
    // 读取数据
    let cart = JSON.parse(window.localStorage.cart ? window.localStorage.cart : '[]')
    // 判断是否选择过商品
    let has = cart.some((curr) => {
      if (curr.id === currProduct.id) {
        curr.amount++
        return true
      };
    })
    if (!has) { // 不存在则添加
      currProduct.amount = 1
      cart.push(currProduct)
    }
    // 存入
    window.localStorage.cart = JSON.stringify(cart)
    // 更新cart
    context.commit('updateCart', cart)
    console.log('添加成功,点击购物车查看', cart)
  },
  // 增加数量
  increment ({ commit }, currProduct) {
    /*  setTimeout(() => { */
    // 从 localStorage 中读取购物车数据
    let cart = JSON.parse(window.localStorage.cart ? window.localStorage.cart : '[]')
    // 将当前商品的数量在购物车所保存的数据中减1
    cart.forEach((curr) => {
      if (curr.id === currProduct.id) { curr.amount++ }
    })
    // 将 cart 存回 localStorage 中
    window.localStorage.cart = JSON.stringify(cart)
    // 提交修改数据
    commit('updateCart', cart)
    /*   }, 300) */
  },
  // 减数量
  decrement ({ commit }, currProduct) {
    // 从 localStorage 中读取购物车数据
    let cart = JSON.parse(window.localStorage.cart ? window.localStorage.cart : '[]')
    // 将当前商品的数量在购物车所保存的数据中减1
    cart = cart.filter((curr) => {
      if (curr.id === currProduct.id) {
        curr.amount--
        if (curr.amount <= 0) {
          /*  if (confirm('确定删除该商品？')) {  */return false
        }
        return true
      }
      return true
    })
    // 将 cart 存回 localStorage 中
    window.localStorage.cart = JSON.stringify(cart)
    // 提交修改数据
    commit('updateCart', cart)
  }

}
