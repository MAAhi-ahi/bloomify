/*import axios from 'axios';

// Create an axios instance with a custom configuration
const API_URL = 'http://localhost:3000'; // Backend URL, update as necessary
const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function for consistent error handling
const handleError = (error) => {
  console.error('API Error:', error);
  throw error.response ? error.response.data : { message: 'Unknown Error' };
};

// Response handling utility function
const handleResponse = (response) => {
  return response.data;
};

// Create Order
export const createOrder = async (orderData) => {
  try {
    const response = await apiInstance.post('/api/order', JSON.stringify(orderData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Get Order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await apiInstance.get(`/api/order/${orderId}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Send Order Notification
export const sendOrderNotification = async (notificationData) => {
  try {
    const response = await apiInstance.post('/send-order-notification', JSON.stringify(notificationData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Update Order Status
export const updateOrderStatus = async (statusData) => {
  try {
    const response = await apiInstance.post('/update-order-status', JSON.stringify(statusData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};*/

// services/api.js


const API_BASE_URL = ' http://localhost:3000'; // Your backend URL
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
    const res = await fetch(`${API_BASE_URL}//update-order-status`, {
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

