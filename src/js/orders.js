class Order {
  constructor(orderId, orderType, quantity, amountUSD, createdDate) {
    this.orderId = orderId;
    this.orderType = orderType;
    this.quantity = quantity;
    this.amount = amountUSD;
    this.createdDate = createdDate;

    this.validateOrder();
  }

  validateOrder() {}
}

function displayOrders(orders, page) {
  const ordersTableBody = document.getElementById('ordersTableBody');
  let ordersHTML = orders.map((order) => {
    return `<tr>
                <td>${order.id}</td>
                <td>${order.type}</td>
                <td>${order.quantity}</td>
                <td>${order.totalAmount}</td>
                <td>${order.createdDate}</td>
                <td><button class="detailsBtn">View Details</button></td>
            </tr>`;
  });
  ordersHTML = ordersHTML.join('');
  ordersTableBody.innerHTML = ordersHTML;
}

// initialize order page
const orders = JSON.parse(localStorage.getItem('orders'));
if (!orders) {
  document.querySelector('.ordersTable').style.display = 'none';
  document.querySelector('.orderSection').style.height = '300px';
  document.querySelector('.noOrders').style.display = 'block';
} else {
  displayOrders(orders, 1);
}
