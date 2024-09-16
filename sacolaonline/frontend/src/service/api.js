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
export const fetchProducts = async () => {
  return await fetchData('products');
};

// Função para buscar pedidos
export const fetchOrders = async () => {
  return await fetchData('orders');
};

// Função para buscar usuários
export const fetchUsers = async () => {
  return await fetchData('users');
};
