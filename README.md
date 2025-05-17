# 🧪 Testes Automatizados - Demoblaze (Cypress + Allure + GitHub Actions)

Este repositório contém a automação do fluxo de compra no site [Demoblaze](https://www.demoblaze.com) utilizando **Cypress**, **Allure Report** e **GitHub Actions**.

---

## 📋 Fluxo Automatizado

1. Login com usuário válido
2. Visualização dos produtos
3. Adição de produto ao carrinho
4. Verificação dos dados do produto no carrinho
5. Finalização da compra

---

## 🧰 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Allure Report](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitHub Pages](https://pages.github.com/)

---

## 🚀 Como Executar os Testes Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

```bash
npm run test
```

### 4. Gere o relatório Allure

```bash
npm run allure:generate
```

### 5. Abra o relatório Allure localmente

```bash
npm run allure:open
```

---

## 🤖 Executando com GitHub Actions

A automação está configurada para rodar automaticamente a cada push na branch `main`. Após a execução:

- Os testes serão executados via Cypress
- O relatório Allure será gerado
- O conteúdo será publicado via GitHub Pages

---

## 🌐 Publicação do Allure Report com GitHub Pages

### ⚙️ Configuração

1. Vá até seu repositório no GitHub
2. Acesse: **Settings > Pages**
3. Em **"Build and deployment"**, selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Clique em **Save**

> Após alguns segundos, o GitHub Pages estará ativo.

### 🔗 URL de Acesso

A URL padrão será:

```
https://<SEU_USUARIO>.github.io/<NOME_DO_REPOSITORIO>/
```

Exemplo:

```
https://cleisonpaganotto.github.io/Test_Pratico_DOT/
```

---

## 📄 Scripts Disponíveis

| Script                | Descrição                             |
|-----------------------|----------------------------------------|
| `npm run test`        | Executa todos os testes com Cypress    |
| `npm run allure:generate` | Gera o relatório Allure             |
| `npm run allure:open` | Abre o relatório Allure localmente     |

---

## 📂 Estrutura de Pastas

```
├── cypress/
│   ├── e2e/
│   │   └── fluxoCompra.cy.js
│   └── support/
├── .github/
│   └── workflows/
│       └── ci.yml
├── allure-report/
├── cypress.config.js
├── package.json
├── README.md
```

---

## 📌 Observações

- O projeto segue boas práticas de **Clean Code** e **Clean Architecture**, mesmo sem uso de Page Object, BDD ou Gherkin.
- O usuário utilizado para login nos testes é: `test` (sem senha).