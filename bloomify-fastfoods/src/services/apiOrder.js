const API_URL = "http://localhost:5001/send-order-notification";

export async function createOrderData(orderData) {
    try {
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error("Order creation failed!");
      }
  
      const data = await res.json();
      console.log("API Response:", data);
      return data;
     } catch (error) {
      console.error("Error in createOrder:", error);
      throw error;
     }
  }
  