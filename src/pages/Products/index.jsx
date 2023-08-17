import React, { useState } from 'react';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import "./style.css";
import Dados from '../../components/ClientData';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [totalCents, setTotalCents] = useState(0);
  const navigate = useNavigate();
  const products = useSelector(state => state.products);

  const submit = values => {
    navigate('Finalizacao', { state: { total: formatDecimalValue(totalCents), name: values.name } });
  }

  const addToTotal = (centsValue) => {
    setTotalCents(prevTotal => prevTotal + centsValue);
  }

  const removeFromTotal = (centsValue) => {
    setTotalCents(prevTotal => prevTotal - centsValue);
  }

  const formatDecimalValue = (centsValue) => {
    const decimalValue = (centsValue / 100).toFixed(2);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(decimalValue);
  }

  const formattedTotal = formatDecimalValue(totalCents);

  return (
    <div>
      <h1 className="title">Produtos</h1>
      <div className="grid-container">
        <div className="grid">
          {products.map(product => (
            <Card
              key={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              installment={product.installment}
              discount={product.discount}
              handleAddToTotal={addToTotal}
              handleRemoveFromTotal={removeFromTotal}
            />
          ))}
        </div>
        <div className="data-container">
          <h2 className="title">Dados do Cliente</h2>
          <Dados onSubmit={submit} />
        </div>
      </div>
      <div className='finalize-container'>
        <h1 className='subtitle'>Total: {formattedTotal}</h1>
        <Button />
      </div>
    </div>
  );
}

export default Products;
