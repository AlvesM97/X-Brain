import { createSlice } from "@reduxjs/toolkit";
import produto01 from "../../assets/Produtos/produto-01.jpeg";
import produto02 from "../../assets/Produtos/produto-02.jpeg";
import produto03 from "../../assets/Produtos/produto-03.jpeg";
import produto04 from "../../assets/Produtos/produto-04.jpeg";
import produto05 from "../../assets/Produtos/produto-05.jpeg";
import produto06 from "../../assets/Produtos/produto-06.jpeg";
import produto07 from "../../assets/Produtos/produto-07.jpeg";
import produto08 from "../../assets/Produtos/produto-08.jpeg";

const initialState = [
  {
    name: "AirPods Apple Fones de ouvido",
    img: produto01,
    id: "produto01",
    price: "1.499,00",
    installment: "Em até 12x de R$ 124,92",
    discount: "R$ 1.349 à vista (10% de desconto)",
  },
  {
    name: "Capa de silicone para Iphone 8/7 cor Areia - rosa",
    img: produto02,
    id: "produto02",
    price: "299,00",
    installment: "Em até 12x de R$ 24,92",
    discount: "R$ 269,10 à vista (10% de desconto)",
  },
  {
    name: "Apple Pencil",
    img: produto03,
    id: "produto03",
    price: "729,00",
    installment: "Em até 12x de R$ 60,75",
    discount: "R$ 656,10 à vista (10% de desconto)",
  },
  {
    name: "Magic Mouse 2 - prateado",
    img: produto04,
    id: "produto04",
    price: "549,00",
    installment: "Em até 12x de R$ 45,75",
    discount: "R$ 494,10 à vista (10% de desconto)",
  },
  {
    name: "Caixa prateada de alumínio com pulseira esportiva branca",
    img: produto05,
    id: "produto05",
    price: "2.899,00",
    installment: "Em até 12x de R$ 241,58",
    discount: "R$ 2.609,10 à vista (10% de desconto)",
  },
  {
    name: "Cabo de lightning para USB(1m)",
    img: produto06,
    id: "produto06",
    price: "149,00",
    installment: "Em até 12x de R$ 12,42",
    discount: "R$ 134,10 à vista (10% de desconto)",
  },
  {
    name: "Smart keyboard para iPad Pro 12,9 polegadas - inglês(EUA)",
    img: produto07,
    id: "produto07",
    price: "1.099,00",
    installment: "Em até 12x de R$ 91,58",
    discount: "R$ 989,10 à vista (10% de desconto)",
  },
  {
    name: "Carregador USB de 5W Apple",
    img: produto08,
    id: "produto08",
    price: "149,00",
    installment: "Em até 12x de R$ 12,42",
    discount: "R$ 134,10 à vista (10% de desconto)",
  }
];
const produtosSlice = createSlice({
  name: "produtos",
  initialState,
});

export default produtosSlice.reducer;
