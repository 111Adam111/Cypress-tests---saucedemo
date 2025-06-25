import LoginUser from 'cypress/models/Login';
import { domain } from 'cypress/consts/routes';

export default function login(data: any = {}) {
    const selectors = {
        inputUsername: '[data-test="username"]',
        inputPassword: '[data-test="password"]',
        buttonSubmit: '[data-test="login-button"]',
    };

    data = {
        ...(new LoginUser),
        ...data,
    };

    cy.visit(domain);
    cy.get(selectors.inputUsername).type(data.username);
    cy.get(selectors.inputPassword).type(data.password);
    cy.get(selectors.buttonSubmit).click();
}

describe('Tests login with valid credentials', () => {
    it('Logs in and opens inventory page', () => {
        login();
        cy.wait(500);
        cy.url().should('include', '/inventory.html');
        cy.contains('.error', 'Products');
    });
});