// src/services/api.js

// Função para buscar produtos
export const fetchProducts = async () => {
    const response = await fetch('http://localhost:8080/products');
    return await response.json();  // Certifique-se de que a resposta seja um array de objetos com `id`, `name`, `description`, `price`, `imageurl`
  };
  
  // Função para buscar pedidos
  export const fetchOrders = async () => {
    const response = await fetch('http://localhost:8080/orders');
    return await response.json();  // Certifique-se de que a resposta seja um array de objetos com `id`, `name`, `description`, `price`, `imageurl`
  };
  
  // Função para buscar usuários
  export const fetchUsers = async () => {
    const response = await fetch('http://localhost:8080/users');
    return await response.json();  // Certifique-se de que a resposta seja um array de objetos com `id`, `username`, `email`
  };
  