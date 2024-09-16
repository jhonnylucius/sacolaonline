// src/components/OrdersList.js

import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../service/api'; // Importa a função de API que você criou

const OrdersList = () => {
  const [orders, setOrders] = useState([]);  // Estado para armazenar os pedidos
  const [error, setError] = useState(null);  // Estado para armazenar o erro

  useEffect(() => {
    // Função que busca os pedidos ao carregar o componente
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();  // Busca os pedidos usando a função do api.js
        setOrders(data);  // Armazena os pedidos no estado
      } catch (err) {
        setError(err.message);  // Em caso de erro, armazena a mensagem de erro
      }
    };

    loadOrders();  // Chama a função quando o componente for montado
  }, []);  // O array vazio [] faz com que isso aconteça apenas uma vez

  if (error) {
    return <div>Erro: {error}</div>;  // Exibe a mensagem de erro, se houver
  }

  return (
    <div>
      <h1>Pedidos</h1>
      {orders.length === 0 ? (
        <p>Nenhum pedido disponível.</p>  // Corrigido o erro de digitação: "pediodo" para "pedido"
      ) : (
        <ul>
          {orders.map((order) => (  // Corrigido de "product" para "order"
            <li key={order.id}>
              {order.name} - {order.price} - {order.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;
