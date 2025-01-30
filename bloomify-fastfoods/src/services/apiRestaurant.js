const API_URL = 'https://fast-food-restapi-1.onrender.com/api';
//const API_URL = 'https://react-fast-pizza-api.onrender.com/api';



export async function getBurgerMenu() {
  const res = await fetch(`${API_URL}/burgermenu`);
  if (!res.ok) throw Error('Failed getting burgermenu');
  const { data } = await res.json();
  return data;
}

export async function getPizzaMenu() {
  const res = await fetch(`${API_URL}/pizzamenu`);
  if (!res.ok) throw Error('Failed getting menu');
  const { data } = await res.json();
  return data;
}


export async function getTacobarMenu() {
  const res = await fetch(`${API_URL}/tacobarmenu`);
  if (!res.ok) throw Error('Failed getting menu');
  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  console.log("API Response:", data);
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
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

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
