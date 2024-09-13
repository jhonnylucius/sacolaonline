// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchOrders, fetchUsers } from './service/api';  // Importando as funções de API

function App() {
  const [products, setProducts] = useState([]);  // Estado para armazenar os produtos
  const [orders, setOrders] = useState([]);      // Estado para armazenar os pedidos
  const [users, setUsers] = useState([]);        // Estado para armazenar os usuários
  const [error, setError] = useState(null);      // Estado para armazenar erros
  const [loading, setLoading] = useState(true);  // Estado para controlar o carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  // Inicia o carregamento
        setError(null);    // Reseta o estado de erro
        // Promise.all faz as três requisições de API ao mesmo tempo (paralelamente)
        const [productsData, ordersData, usersData] = await Promise.all([
          fetchProducts(),  // Requisição para buscar produtos
          fetchOrders(),    // Requisição para buscar pedidos
          fetchUsers()      // Requisição para buscar usuários
        ]);
        setProducts(productsData || []);  // Armazena os produtos no estado
        setOrders(ordersData || []);      // Armazena os pedidos no estado
        setUsers(usersData || []);        // Armazena os usuários no estado
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);  // Finaliza o carregamento, seja com sucesso ou erro
      }
    };

    fetchData();  // Chama a função para buscar os dados da API
  }, []);  // O array vazio [] significa que esse efeito será executado apenas uma vez quando o componente for montado

  // Exibindo uma mensagem de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <p>Carregando dados...</p>;
  }

  // Exibindo uma mensagem de erro amigável caso tenha ocorrido algum problema
  if (error) {
    return <p>{error}</p>;  // Exibe a mensagem de erro amigável para o usuário
  }

  return (
    <div>
      <h1>Online Store Data</h1>

      <h2>Products</h2>
      {/* Garante que products seja um array antes de usar map() */}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.description} - ${product.price} <br />
              <img src={product.imageurl} alt={product.name} width="100" />
            </li>
          ))
        ) : (
          <p>Nenhum produto disponível.</p>
        )}
      </ul>

      <h2>Orders</h2>
      {/* Garante que orders seja um array antes de usar map() */}
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id}>Pedido: {order.name} - {order.description} - ${order.price}</li>
          ))
        ) : (
          <p>Nenhum pedido disponível.</p>
        )}
      </ul>

      <h2>Users</h2>
      {/* Garante que users seja um array antes de usar map() */}
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{user.username} ({user.email})</li>
          ))
        ) : (
          <p>Nenhum usuário disponível.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
