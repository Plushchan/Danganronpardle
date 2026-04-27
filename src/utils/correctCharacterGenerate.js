import characters from "../data/characters.json";

export default function correctCharacter() {
  const index = Math.floor(Math.random() * characters.length);

  return characters[index];
}
