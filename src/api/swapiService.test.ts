import { describe, test, expect } from "@jest/globals";
import SwapiClient from "./swapiService";
import Character from "./swapiService";

describe("Sum function", () => {
  const client: SwapiClient = new SwapiClient();

  //   test("Returns correct value", () => {
  //     return client.getAllCharacters().then((characters) => {
  //       expect(characters.length).toEqual(82);
  //     });
  //   });

  test("Returns 82 characters", () => {
    // execute code
    return client.getCharacter().then((character) => {
      expect(character.name).toEqual("Dara Voss");
    });
  });
});
