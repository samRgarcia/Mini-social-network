/*global describe, it, expect*/

describe('Mi primer test',function (){
  it('para ver si la app funciona',function (){
    cy.visit('/')
  })
  it('navegamos a una categoria y vemos fotos',function (){
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('si podemos navegar con la navbar a la home',function (){
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include','/')
  })
})
