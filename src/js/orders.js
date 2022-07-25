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

// GLOBAL FUNCTIONS
// ----------------------------------------------------------------------------
function displayOrders(orders, currentPage) {
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

  const startIndex = maxOrdersPerPage * (currentPage - 1);
  const endIndex = maxOrdersPerPage * currentPage - 1;

  ordersHTML = ordersHTML.slice(startIndex, endIndex).join('');
  ordersTableBody.innerHTML = ordersHTML;
}

function displayPagination(pages) {}

// START OF INLINE CODE EXECUTION
//------------------------------------------------------------------------------
// initialize order page; start main script
const orders = JSON.parse(localStorage.getItem('orders'));
const maxOrdersPerPage = 8;
const pages = Math.ceil(orders.length / maxOrdersPerPage);

// if no orders, display no order message, else display all orders with pagination
if (!orders) {
  document.querySelector('.ordersTable').style.display = 'none';
  document.querySelector('.orderSection').style.height = '300px';
  document.querySelector('.noOrders').style.display = 'block';
} else {
  displayOrders(orders, 1);
}

// hide pagination menu if amount of pages is less than 2, else show pagination menu
pages < 2
  ? (document.querySelector('.center').style.display = 'none')
  : (document.querySelector('.center').style.display = 'block');
