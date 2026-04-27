import React from "react";

function Table({ rows, correctCharacter }) {
  return (
    <div>
      <table className="border-4 border-gray-900">
        <thead>
          <tr className="[&>th]:p-3">
            <th>Image</th>
            <th>Name</th>
            <th>Race</th>
            <th>Gender</th>
            <th>Hair Color</th>
            <th>Age</th>
            <th>Talent</th>
            <th>Height</th>
            <th>First Appearance</th>
            <th>Alive</th>
            <th>Death Chapter</th>
          </tr>
        </thead>

        <tbody className="border-4 border-gray-900">
          {rows.map((row, index) => (
            <tr
              key={index}
              className="[&>td]:max-w-24 [&>td]:max-h-24 [&>td]:min-h-24 [&>td]:min-w-24 border [&>td]:border-2 [&>td]:border-gray-900 [&>td]:p-2 text-center"
            >
              <td>
                <img
                  src={row.image}
                  className="rounded-2xl border-2 border-gray-950 shadow-2xl"
                />
              </td>
              <td
                className={`${correctCharacter.name == row.name ? "correct" : "incorrect"}`}
              >
                {row.name}
              </td>
              <td
                className={`${correctCharacter.race == row.race ? "correct" : "incorrect"}`}
              >
                {row.race}
              </td>
              <td
                className={`${correctCharacter.gender == row.gender ? "correct" : "incorrect"}`}
              >
                {row.gender}
              </td>
              <td
                className={`${
                  JSON.stringify(correctCharacter.hairColor) ==
                  JSON.stringify(row.hairColor)
                    ? "correct"
                    : correctCharacter.hairColor.some((e) =>
                          row.hairColor.includes(e),
                        )
                      ? "partiallyCorrect"
                      : "incorrect"
                }`}
              >
                {row.hairColor.join(", ")}
              </td>
              <td
                className={`${correctCharacter.age == row.age ? "correct" : "incorrect"}`}
              >
                {row.age}
              </td>
              <td
                className={`${correctCharacter.talent == row.talent ? "correct" : "incorrect"}`}
              >
                {row.talent}
              </td>
              <td
                className={`${correctCharacter.height == row.height ? "correct" : "incorrect"}`}
              >
                {row.height}
              </td>
              <td
                className={`${correctCharacter.firstAppearance == row.firstAppearance ? "correct" : "incorrect"}`}
              >
                {row.firstAppearance}
              </td>
              <td
                className={`${correctCharacter.alive == row.alive ? "correct" : "incorrect"}`}
              >
                {row.alive ? "Alive" : "Dead"}
              </td>
              <td
                className={`${correctCharacter.deathChapter == row.deathChapter ? "correct" : "incorrect"}`}
              >
                {row.deathChapter}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
