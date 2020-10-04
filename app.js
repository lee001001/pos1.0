// ======= default data =======
const menu = document.querySelector('#menu')
const cart = document.querySelector('#cart')
const totalAmount = document.querySelector('#total-amount')
const button = document.querySelector('#submit-button')

// 菜單資料
const productData = [
  {
    id: 'product-1',
    imgUrl:
      'https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '馬卡龍',
    price: 90
  },
  {
    id: 'product-2',
    imgUrl:
      'https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '草莓',
    price: 60
  },
  {
    id: 'product-3',
    imgUrl:
      'https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '奶茶',
    price: 100
  },
  {
    id: 'product-4',
    imgUrl:
      'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: '冰咖啡',
    price: 180
  }
]
// ======= 請從這裡開始 =======
// 1.使用菜單產生 menu 區塊
const cartItem = []
let total = 0
productData.forEach(product => {
  menu.innerHTML += `
  <div class="col-3">
        <div class="card">
          <img
            src="${product.imgUrl}"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a id=${product.id} href="#" class="btn btn-primary">加入購物車</a>
          </div>
        </div>
      </div>
  `
})
// 2.加入購物車
function addCart(event) {
  const id = event.target.id
  // 取得id找出產品資訊
  const addedProduct = productData.find(product => product.id === id)
  const name = addedProduct.name
  const price = addedProduct.price

  cart.innerHTML += `
  <li class="list-group-item">${name} X 1 小計：${price}</li>
  `
  caculateTotal(price)
}

// 3.計算總金額
function caculateTotal(price) {
  total += price
  totalAmount.innerHTML = total
}

// 4.送出訂單
function submitOrder() {
  alert(`感謝你的購買： 總金額${total}`)
  reset()
}

// 5.reset
function reset() {
  total = 0
  cart.innerHTML = ''
  totalAmount.innerHTML = '--'

}

menu.addEventListener('click', addCart)
button.addEventListener('click', submitOrder)
