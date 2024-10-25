describe('Task Manager E2E', () => {
  it('should load the task manager dashboard', () => {
    cy.visit('/');
    cy.contains('Tasks');
  });

  it('should load tasks from the API', () => {
    cy.visit('/');
    cy.intercept('GET', '/todos', { fixture: 'tasks.json' }).as('getTasks');
    cy.wait('@getTasks');
    cy.get('h3').should('have.length.greaterThan', 0);
  });

  it('should switch between dark and light mode', () => {
    cy.visit('/');
    cy.get('button').contains('FR').click();
    cy.contains('Bienvenue'); // Should translate to French
  });
});
