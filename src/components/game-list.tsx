

import { fetchOptions } from "../_helpers/fetch-option";
import { useEffect, useState } from "react";
import type { GameModel } from "../_models/game.model";
import { toast } from "react-toastify";
import GameCard from "../components/game-card";
import { capitalizeFirstLetter } from "../_helpers/string-methods";

const GameList = (props: {
  url: string,
  title: string
}) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<GameModel[]>([]);
  const [search, setSearch] = useState<string>("")

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
  }, [props?.url])

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const text = form['search']?.value
    setSearch(text)
  }
  const filteredArr = items?.filter((val) => {
    const data = val?.title.toLowerCase()?.includes(search?.toLowerCase())
    // console.log(val.title)
    // console.log(search)

    return data
  }
  )

  return (
    <section>
      <div className="flex mb-8 md:items-center md:justify-between md:flex-row flex-col gap-4">
        <h2 className="left-line  md:text-2xl text-lg pl-4 leading-none font-semibold">{capitalizeFirstLetter(props?.title)}</h2>
        <form onSubmit={onSubmitSearch} className="md:w-60 w-full">
          <input name="search" type="text" placeholder="Type & Hit Enter to Search" className=" placeholder:text-sm px-4 py-1.5 text-sm rounded-lg w-full border  focus-visible:outline focus-visible:outline-purple-500 border-purple-500/60" />

        </form>
      </div>


      {loading && <div className="no-data">
        <div className="loader"></div>
      </div>}
      {!loading && (!filteredArr || filteredArr?.length === 0) && <div className=" no-data">
        <p>No games available!</p>
      </div>}
      {!loading && (filteredArr && filteredArr?.length > 0) &&
        <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {filteredArr?.map((val, i) => {
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