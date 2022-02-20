import Heading from "components/Head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [points, setPoints] = useState(0);
  const [leaderboardModal, setLeaderboardModal] = useState(false);
  const [games, setGames] = useState(["test", "Game1", "Game2"]);

  useEffect(() => {
    // TODO: get user points and user games created
  }, []);

  return (
    <>
      <Heading />
      <div className="profile center">
        <div className="profile__buttons">
          <h1>Your profile</h1>
          <div>
            <button className="button button--black">Create Game</button>
          </div>
        </div>
        <div className="profile__buttons">
          <p>⭐ {points} stars</p>
          <div>
            <button className="button button--blue">See leaderboard</button>
          </div>
        </div>
        <div className="profile__table">
          <h2>Previously created</h2>
          <table>
            {games.map((game) => {
              return (
                <tr key={game}>
                  <td>
                    <Link href={`create/${game}`}>{game}</Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
