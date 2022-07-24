import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Na tela de STOCKS,", () => {
  it("é possível entrar após efetuar login", () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");

    const emailElement = screen.getByLabelText(/email/i);
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveValue("");
    userEvent.type(emailElement, "email@test.com");
    expect(emailElement).toHaveValue("email@test.com");

    const passwordElement = screen.getByLabelText(/senha/i);
    expect(passwordElement).toBeInTheDocument();
    expect(passwordElement).toHaveValue("");
    userEvent.type(passwordElement, "123456");
    expect(passwordElement).toHaveValue("123456");

    const btnElement = screen.getByRole("button", { name: /login/i });
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toBeVisible();
    userEvent.click(btnElement);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "Olá,",
      level: 3,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("existe o título 'Minhas ações'", () => {
    render(<App />);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "Minhas ações",
      level: 2,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("existe o título 'Disponíveis para investir'", () => {
    render(<App />);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "Disponíveis para investir",
      level: 2,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("se o email logado aparece no topo da aplicação", () => {
    render(<App />);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "email@test.com",
      level: 4,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("aparece um quadro explicativo se não houver ações investidas", () => {
    render(<App />);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "Lista vazia",
      level: 3,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("aparece um quadro de 'Loading' se as ações ainda não estiverem renderizadas na tela", () => {
    render(<App />);

    expect(window.location.pathname).toBe("/stocks");

    const headerElement = screen.getByRole("heading", {
      name: "Loading...",
      level: 3,
    });

    expect(headerElement).toBeInTheDocument();
  });

  // it("se a tabela de ações é renderizada", async () => {
  //   render(<App />);

  //   expect(window.location.pathname).toBe("/stocks");

  //   const tableElement = screen.getByRole("table");
  //   expect(tableElement).toBeInTheDocument();

  //   const headerElement = screen.getByRole("heading", {
  //     name: "Loading...",
  //     level: 3,
  //   });
  //   await waitForElementToBeRemoved(headerElement);
  // });
});
