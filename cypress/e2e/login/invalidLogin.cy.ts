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
    cy.get(selectors.inputUsername).type(data.invalidUsername);
    cy.get(selectors.inputPassword).type(data.password);
    cy.get(selectors.buttonSubmit).click();
}

describe('Tests login with invalid credentials', () => {
    it('doesnt log in and shows a validation message', () => {
        login();
        cy.wait(500);
        cy.contains('.error', 'Epic sadface: Username and password do not match any user in this service')
            .should('be.visible');
    });
});