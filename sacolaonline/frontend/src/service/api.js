// src/services/api.js

// Função genérica para tratar requisições
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:8080/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados de ${endpoint}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar dados de ${endpoint}:`, error);
    throw error;  // Repassa o erro para ser tratado onde essa função for usada
  }
};

// Função para buscar produtos
export const fetchProduct = async () => {
  return await fetchData('product');
};

// Função para buscar pedidos
export const fetchOrders = async () => {
  return await fetchData('orders');
};

// Função para buscar usuários
export const fetchUsers = async () => {
  return await fetchData('users');
};

// Função para salvar um novo pedido

export const saveOrder = async (order) => {
  return await fetchData('orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
};

// Função para atualizar um pedido

export const updateOrder = async (order) => {
  return await fetchData(`orders/${order.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
};

// Função para deletar um pedido

export const deleteOrder = async (orderId) => {
  return await fetchData(`orders/${orderId}`, {
    method: 'DELETE',
  });
};

// Função para salvar um novo usuário

export const saveUser = async (user) => {
  return await fetchData('users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

// Função para atualizar um usuário

export const updateUser = async (user) => {
  return await fetchData(`users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

// Função para deletar um usuário

export const deleteUser = async (userId) => {
  return await fetchData(`users/${userId}`, {
    method: 'DELETE',
  });
};

// Função para buscar um usuário por ID

export const getUserById = async (userId) => {
  return await fetchData(`users/${userId}`);
};

// Função para buscar um pedido por ID

export const getOrderById = async (orderId) => {
  return await fetchData(`orders/${orderId}`);
};

// Função para salvar ou atualizar um produto
export const saveOrUpdateProduct = async (product) => {
  if (product.id) {
    return await fetchData(`products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  } else {
    return await fetchData('products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  }
};

// Função para deletar um produto
export const deleteProduct = async (productId) => {
  return await fetchData(`products/${productId}`, {
    method: 'DELETE',
  });
};
