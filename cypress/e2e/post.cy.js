describe('empty spec', () => {

  beforeEach(()=>{
    cy.intercept('POST','http://localhost:3001/api/v1/urls',{id: 2, long_url: "https://images.unsplash.com/photo...", short_url: "http://localhost:3001/useshorturl/2", title: 'Awesome photo'})
    cy.visit('http://localhost:3000/')
  })


  it('should display the new shortened url after the form is submitted',()=>{
    cy.get('input[name="title"]')
    .type("This will")
    .get('input[name="urlToShorten"]')
    .type("Get stubbed")
    .get('form').children().last().click()
  })
})