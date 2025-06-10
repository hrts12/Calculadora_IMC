# Calculadora de IMC

Este projeto é uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida com HTML, CSS e JavaScript puro. A calculadora permite que o usuário insira altura e peso para calcular automaticamente o IMC, exibindo a classificação correspondente conforme os padrões da Organização Mundial da Saúde (OMS).

## Funcionalidades
- Cálculo automático do IMC
- Classificação do IMC com base em faixas oficiais
- Cores visuais que indicam o nível de saúde (ex: normal, sobrepeso, obesidade)
- Validação de entrada (permite apenas números e vírgulas)
- Exibição dinâmica de tabela com faixas de IMC
- Botão para limpar os campos
- Botão para retornar e fazer um novo cálculo

## Como funciona
O usuário preenche os campos de **altura** e **peso**. Ao clicar em "Calcular", o IMC é gerado e comparado com uma tabela de referência definida no código. 
O sistema mostra o valor calculado e sua respectiva classificação (como "Normal", "Sobrepeso", etc.), com cores diferentes para cada nível.
Toda a lógica é feita com JavaScript puro e os dados da tabela de referência são organizados em um array de objetos. A interface alterna entre a tela de entrada de dados e a tela de resultado.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript

## Licença
MIT
