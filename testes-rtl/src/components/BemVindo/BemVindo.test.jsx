import { expect } from "vitest";
import BemVindo from "./BemVindo";
import { render, screen } from "@testing-library/jest-dom";

test("exibe mensagem de boas-vindas", () => {
  render(<BemVindo />);

  expect(screen.getByText("Bem vindo a aula de testes!")).toBeInTheDocument();
});
