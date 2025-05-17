# Testes Automatizados - Demoblaze

Este repositório contém a automação do fluxo completo de compra no site https://www.demoblaze.com usando Cypress e Allure Report.

## ✔️ Pré-requisitos

- Node.js 18+
- Git

## 📦 Instalação

```bash
npm install
```

## ▶️ Execução dos Testes

```bash
npm run test
```

## 📊 Geração e Visualização do Relatório Allure

```bash
npm run allure:generate
npm run allure:open
```

## 🔁 GitHub Actions

Pipeline automático para:

- Executar testes
- Gerar Allure Report
- Publicar no GitHub Pages
