describe('Task Manager E2E', () => {
    it('should load the task manager dashboard', () => {
      cy.visit('/');
      cy.contains('Tasks');
    });
  
    it('should switch between dark and light mode', () => {
      cy.visit('/');
      cy.get('button.dark-mode-toggle').click();
      cy.get('body').should('have.class', 'dark');
    });
  });
  