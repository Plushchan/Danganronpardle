import characters from "../data/characters.json";

export default function findCharacterByName(name) {
  return characters.find((c) => c.name === name);
}
