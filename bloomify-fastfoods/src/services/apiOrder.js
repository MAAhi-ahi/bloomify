//const API_BASE_URL = 'http://localhost:50010'; 
const API_BASE_URL = "https://real-backend-bphq.vercel.app"; 

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}


// Get Order by ID
export async function getOrderById(orderId) {
    const response = await fetch(`${API_BASE_URL}/api/order/${orderId}`);
    if (!response.ok) throw Error(`Couldn't find order #${orderId}`);
    const {data} = await response.json();
    return data
};


export async function updateOrderStatus(orderId, status, customerEmail, customerName, phone, address, orderDetails) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/orders/${orderId}/update-order-status`, {
      method: 'POST',
      body: JSON.stringify({
        orderId,
        status,
        customerEmail,
        customerName,
        phone,
        address,
        orderDetails,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error('Failed to update order status');
    const { success, message } = await res.json();
    return { success, message };
  } catch (error) {
    throw Error(error.message || 'Failed to update order status');
  }
}

