import React, { useState } from 'react';
import { saveOrUpdateProduct } from '../services/api';

const ProductForm = ({ product, onSave }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(!!product);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isEditing) {
        await saveOrUpdateProduct({ id: product.id, name, price, description });
      } else {
        await saveOrUpdateProduct({ name, price, description });
      }
      onSave();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Campos do formulário (input, textarea, etc.) */}

      {error && <p>{error}</p>}
      <button type="submit">{isEditing ? 'Atualizar' : 'Salvar'}</button>

      {/* ... Botões de edição, remoção e voltar */}

    </form>
  );
};

export default ProductForm;