describe('TodoMVC App', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('loads the app', () => {
        cy.visit('/')
        cy.title().should('eq', 'React • TodoMVC')
    })

    it('shows the input field', () => {
        cy.visit('/')
        cy.get('.new-todo').should('be.visible').should('be.enabled')
    })

    it('displays an empty todo list when page loads', () => {
        cy.visit('/')
        cy.get('.new-todo').should('be.empty')
    })

    it('adds multiple task items to list', () => {
        cy.visit('/')
        cy.get('.new-todo').type('sdfkasfskfj{enter}')
        cy.get('.new-todo').type('sdfksdjsf{enter}')
        cy.get('.new-todo').type('dfdjf fi jdfd{enter}')
        cy.get('.todo-list li').should('have.length', 3)
      })
      

  
  })