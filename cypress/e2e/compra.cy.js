describe('Validação do Fluxo de compra no Demoblaze', () => {
  beforeEach(() => {
    cy.login('test', 'test');
    cy.wait(1000)
  });

  it('CT01 - Exibir produtos após login', () => {
    cy.get('.card-title').should('exist');
    cy.wait(1000)

  });

  it('CT02 - Adicionar produto ao carrinho', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
    cy.wait(1000)

  });

  it('CT03 - Verificar produto no carrinho', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.contains('Add to cart').click();
    cy.visit('https://www.demoblaze.com/cart.html');
    cy.contains('Samsung galaxy s6').should('be.visible');
    cy.wait(1000)

  });

  it('CT04 - Finalizar compra com dados obrigatórios', () => {
    cy.visit('https://www.demoblaze.com/cart.html');
    cy.contains('Place Order').click();
    cy.get('#name').type('João');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234123412341234');
    cy.get('#month').type('05');
    cy.get('#year').type('2025');
    cy.contains('Purchase').click();
    cy.wait(1000)

  });

  it('CT05 - Confirmar mensagem de compra', () => {
    cy.visit('https://www.demoblaze.com/cart.html');
    cy.contains('Place Order').click();
    cy.get('#name').type('João');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234123412341234');
    cy.get('#month').type('05');
    cy.get('#year').type('2025');
    cy.contains('Purchase').click();
    cy.get('body > div.sweet-alert.showSweetAlert.visible').should('be.visible');
    cy.get('.confirm').click();
    cy.wait(1000)

  });
});
