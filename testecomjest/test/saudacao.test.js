const saudacao = require("../saudacao");

test("deve retornar uma saudacao corretamente", () => {
  expect(saudacao("Arthur")).toBe("Olá, Arthur!");
});
