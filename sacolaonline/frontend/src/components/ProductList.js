// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../service/api'; // Importa a função de API que você criou

const ProductList = () => {
  const [product, setProduct] = useState([]);  // Estado para armazenar os produtos
  const [error, setError] = useState(null);  // Estado para armazenar o erro

  useEffect(() => {
    // Função que busca os produtos ao carregar o componente
    const loadProduct = async () => {
      try {
        const data = await fetchProduct();  // Busca os produtos usando a função do api.js
        setProduct(data);  // Armazena os produtos no estado
      } catch (err) {
        setError(err.message);  // Em caso de erro, armazena a mensagem de erro
      }
    };

    loadProduct();  // Chama a função quando o componente for montado
  }, []);  // O array vazio [] faz com que isso aconteça apenas uma vez

  if (error) {
    return <div>Erro: {error}</div>;  // Exibe a mensagem de erro, se houver
  }

  return (
    <div>
      <h1>Produtos</h1>
      {product.length === 0 ? (
        <p>Nenhum produto disponível.</p>  // Exibe essa mensagem se não houver produtos
      ) : (
        <ul>
          {product.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} - {product.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
