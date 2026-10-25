// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("entry");
    li.textContent = item.name;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);
  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}