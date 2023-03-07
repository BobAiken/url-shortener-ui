describe('empty spec', () => {

  beforeEach(()=>{
    cy.intercept('http://localhost:3001/api/v1/urls',{
      urls: [
      {
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"
      }
      ]
      })
    cy.visit('http://localhost:3000/')
  })
  it('should display the page title and existing shortened URLs', () => {
    cy.contains('URL Shortener')
  })
})