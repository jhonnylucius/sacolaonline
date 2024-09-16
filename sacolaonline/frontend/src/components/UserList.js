// src/components/UsersList.js

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../service/api'; // Importa a função de API que você criou

const UsersList = () => {
  const [users, setUsers] = useState([]);  // Estado para armazenar os usuários
  const [error, setError] = useState(null);  // Estado para armazenar o erro

  useEffect(() => {
    // Função que busca os usuários ao carregar o componente
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();  // Busca os usuários usando a função do api.js
        setUsers(data);  // Armazena os usuários no estado
      } catch (err) {
        setError(err.message);  // Em caso de erro, armazena a mensagem de erro
      }
    };

    loadUsers();  // Chama a função quando o componente for montado
  }, []);  // O array vazio [] faz com que isso aconteça apenas uma vez

  if (error) {
    return <div>Erro: {error}</div>;  // Exibe a mensagem de erro, se houver
  }

  return (
    <div>
      <h1>Usuários</h1>  
      {users.length === 0 ? (
        <p>Nenhum usuário disponível.</p>  // Exibe essa mensagem se não houver usuários
      ) : (
        <ul>
          {users.map((user) => (  
            <li key={user.id}>
              {user.username} - {user.email} - {user.endereco}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
