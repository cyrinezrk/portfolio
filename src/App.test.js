import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { projects, skillGroups } from "./data/content";

test("affiche le nom dans le hero", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Cyrine/i);
});

test("le sommaire n'affiche que les projets qu'on peut aller voir", () => {
  const { container } = render(<App />);
  const items = [...container.querySelectorAll(".p-item")];
  // `comingSoon` : au sommaire sans lien.
  const shown = projects.filter((p) => p.link || p.repo || p.comingSoon);

  expect(items).toHaveLength(shown.length);
  expect(items[0]).toHaveTextContent("JOJA");
  expect(items[1]).toHaveTextContent("Alice in Wonderland");
  expect(container.querySelector(".p-sheet-title")).toHaveTextContent("JOJA");
});

test("aucun projet sans lien, dépôt, ni chantier annoncé n'est proposé", () => {
  const { container } = render(<App />);
  const names = [...container.querySelectorAll(".p-name")].map((n) => n.textContent);

  projects
    .filter((p) => !p.link && !p.repo && !p.comingSoon)
    .forEach((p) => expect(names).not.toContain(p.fr.title));
});

test("chaque écran est une section repérable par la navigation", () => {
  render(<App />);
  ["top", "about", "projects", "contact"].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
});

test("plus aucun tiret cadratin dans le texte affiché", () => {
  const { container } = render(<App />);
  expect(container.textContent).not.toMatch(/—/);
});

test("chaque compétence renvoie à une source officielle", () => {
  const { container } = render(<App />);
  const items = skillGroups.flatMap((g) => g.items);

  items.forEach((item) => {
    expect(item.href).toMatch(/^https:\/\//);
  });

  const links = [...container.querySelectorAll(".skill-group li a")];
  expect(links).toHaveLength(items.length);
  links.forEach((a) => expect(a).toHaveAttribute("href", expect.stringMatching(/^https:/)));
});

test("le menu de téléphone reste fermé tant qu'on ne l'ouvre pas", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".nav-sheet")).toBeNull();

  fireEvent.click(screen.getByRole("button", { name: "Menu" }));
  const sheet = container.querySelector(".nav-sheet");
  expect(sheet).toBeInTheDocument();
  expect(sheet.querySelectorAll("a")).toHaveLength(3);
});
