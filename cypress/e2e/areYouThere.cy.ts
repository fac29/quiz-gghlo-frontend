/// <reference types="cypress" />

describe('Homepage Loading', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/');
	});

	it('loads correctly on desktop screen size', () => {
		cy.viewport('macbook-16');
		cy.get('body').should('be.visible');
	});

	it('loads correctly on tablet screen size', () => {
		cy.viewport('ipad-2');
		cy.get('body').should('be.visible');
	});

	it('loads correctly on mobile screen size', () => {
		cy.viewport('iphone-6');
		cy.get('body').should('be.visible');
	});

	it('displays the correct title', () => {
		cy.title().should('eq', 'GGHGGHLO xperience');
	});

	it('displays the main content', () => {
		cy.get('main').should('be.visible');
	});
});
