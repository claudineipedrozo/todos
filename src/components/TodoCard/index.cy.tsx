import TodoCard from ".";
import { TaskType } from "../../models/TaskType";
import { Todo } from "../../models/Todo";

describe("<TodoCard />", () => {

    it("should render todo data correctly", () => {
        const todo: Todo = {
            deadline: new Date(),
            description: "Limpar a casa",
            taskType: TaskType.CLEANING,
        };
        cy.mount(<TodoCard todo={todo} />);

        cy.get('[data-cy="task-type"]').invoke("attr", "alt").should("eq", todo.taskType);

        cy.get('[data-cy="task-description"]').should("have.text", todo.description);

        cy.get('[data-cy="task-deadline"]').should("have.text", todo.deadline.toLocaleDateString())
    });
});