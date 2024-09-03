describe("e2e over Todos app", () => {
    it("should allow user to save a todo", () => {
        cy.visit("");

        const description = "Limpar o quarto";
        const deadline = "2024-09-02";
        const taskType = "Limpeza";

        cy.get('[type="text"]').type(description);

        cy.get('[type="date"]').type(deadline);

        cy.get('select').select(taskType);

        cy.get('[type="submit"]').click();
        


        cy.get('[data-cy="task-type"]').invoke("attr", "alt").should("eq", taskType);

        cy.get('[data-cy="task-description"]').should("have.text", description);

        cy.get('[data-cy="task-deadline"]').should("have.text", new Date(deadline).toLocaleDateString())
    })
})