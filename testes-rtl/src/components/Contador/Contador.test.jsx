import Contador from "./Contador";
import { fireEvent, render, screen } from "@testing-library/react";

test("incrementa o contador ao clicar no botão", () => {
  render(<Contador />);

  fireEvent.click(screen.getByRole("button", { name: "Incrementar" }));

  expect(screen.GetByText("Contador:1")).toBeInTheDocument();
});
