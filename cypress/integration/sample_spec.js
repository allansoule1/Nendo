describe('Présence de contact en header', () => {
    it('Contact en header', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.style_menu__2j05h li').should('contain','CONTACT')
    })
})

describe('Présence de contact en footer', () => {
    it('Contact en footer', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.style_footer__2xJJO').should('contain','Contact')
    })
})

describe('Présence des mentions légales en footer', () => {
    it('Mention légales en footer', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Mentions légales').click()
        cy.url().should('include', '/legal-notices')
    })
})

describe("Présence de l'image à l'accueil", () => {
    it("L'image à l'accueil", () => {
        cy.visit('http://localhost:3000/')
        cy.get('.style_section__3gwgR').should('have.css', 'background-image')
        .and('include', 'http://localhost:3000/background.jpg')
        
    })
})

describe('Présence de réseaux en footer', () => {
    it('Réseaux en footer', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.style_footer__2xJJO').should('contain','Facebook')
        cy.get('.style_footer__2xJJO').should('contain','Twitter')
        cy.get('.style_footer__2xJJO').should('contain','Instagram')
        cy.get('.style_footer__2xJJO').should('contain','TikTok')
    })
})

describe('Présence de la bannière', () => {
    it('Présence de la bannière', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.style_banner__1u3ti')
    })
})