
import { fetchOptions } from "../_helpers/fetch-option";
import { useEffect, useState } from "react";
import type { GameModel } from "../_models/game.model";
import { toast } from "react-toastify";
import GameCard from "../components/game-card";

const GameList = (props: {
  url: string,
  title: string
}) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<GameModel[]>([]);

  const getGames = async (url?: string) => {
    if (!url) {

      return
    }

    setLoading(true)
    try {
      const response = await fetch(url, fetchOptions)
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later ")
      }
      const data = await response.json()

      if (data && Array.isArray(data) && data.length > 0) {

        setItems(data)
        console.log(data)
      }


    } catch (error) {
      console.log(error)
      toast("Unable to fetch games! Please try again later.", {
        type: "error"
      })
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    getGames(props.url)
  }, [props.url])
  return (
    <section>
      <h2 className="text-4xl mb-8 font-bold gradient-text  uppercase">{props.title}</h2>

      {loading && <div className="no-data">
        <div className="loader"></div>
      </div>}
      {!loading && (!items || items.length === 0) && <div className=" no-data">
        <p>No games available!</p>
      </div>}
      {!loading && (items && items.length > 0) &&
        <div className="grid grid-cols-3 gap-7">
          {items.map((val, i) => {
            return <div key={i}>
              <GameCard val={val} />
            </div>
          })}
        </div>
      }
    </section>
  )
}

export default GameList