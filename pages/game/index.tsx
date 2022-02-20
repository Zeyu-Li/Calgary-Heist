import Heading from "@/components/Head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Index() {
  const [points, setPoints] = useState(0);
  const [leaderboardModal, setLeaderboardModal] = useState(false);
  const [games, setGames] = useState(["test", "Game1", "Game2"]);

  useEffect(() => {
    // TODO: get user points and user games created
  }, []);
  const joinGame = () => {
    // join game here
  };

  const title = "Main Menu";
  return (
    <>
      <Heading title={title} />
      <div className="profile center">
        <div className="profile__buttons">
          <h1>Your profile</h1>
          <div>
            <Link href="/create/new">
              <button className="button button--black">Create Game</button>
            </Link>
          </div>
        </div>
        <div className="profile__buttons">
          <p>⭐ {points} stars</p>
          <div>
            <button className="button button--blue">See leaderboard</button>
          </div>
        </div>
        <div className="profile__buttons" style={{ marginTop: 20 }}>
          <input placeholder="game URL"></input>
          <div>
            <button className="button button--blue" onClick={() => joinGame()}>
              Join game
            </button>
          </div>
        </div>
        <div className="profile__table">
          <h2>Previously created</h2>
          <table>
            {games.map((game) => {
              return (
                <tr key={game}>
                  <td title="Go back to made game">
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
