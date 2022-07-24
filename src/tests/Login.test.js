import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Na tela de LOGIN,", () => {

  it('existe o input "Email"', () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");
    const emailElement = screen.getByLabelText(/email/i);
    expect(emailElement).toBeInTheDocument();
  });

  it('existe o input "Senha"', () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");
    const passwordElement = screen.getByLabelText(/senha/i);
    expect(passwordElement).toBeInTheDocument();
  });

  it("existe o botão para fazer login", () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");
    const btnElement = screen.getByRole("link", { name: /login/i });
    expect(btnElement).toBeInTheDocument();
  });

  it("é possível digitar o email", () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");

    const emailElement = screen.getByLabelText(/email/i);
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveValue("");
    userEvent.type(emailElement, "email@test.com");
    expect(emailElement).toHaveValue("email@test.com");
  });
  it("é possível digitar senha", () => {
    render(<App />);
    expect(window.location.pathname).toBe("/");

    const passwordElement = screen.getByLabelText(/senha/i);
    expect(passwordElement).toBeInTheDocument();
    expect(passwordElement).toHaveValue("");
    userEvent.type(passwordElement, "123456");
    expect(passwordElement).toHaveValue("123456");
  });

  it("é possível fazer login", async () => {
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

    const btnElement = screen.getByRole("link", { name: /login/i });
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toBeVisible();
    userEvent.click(btnElement);
    expect(window.location.pathname).toBe("/stocks");
  });
});