import { useEffect, useState } from "react";
import PrimaryBtn from "../components/primary-btn"
import type { GameModel } from "../_models/game.model";
import { fetchOptions } from "../_helpers/fetch-option";
import { toast } from "react-toastify";
import { HomeFilterEnum } from "../_enum/home.filter.enum";
import TrendinGames from "../components/trending-games";
import { Link } from "react-router";

const filterGenre = (arr: GameModel[], genre: HomeFilterEnum) => {
  return arr?.filter((val) => {
    return val?.genre?.toLowerCase() === genre.toLowerCase()
  })?.slice(0, 5)

}

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<GameModel[]>([]);

  // drived states

  const mmorpg = filterGenre(items, HomeFilterEnum.MMORPG)

  const shooter = filterGenre(items, HomeFilterEnum.SHOOTER)
  const strategy = filterGenre(items, HomeFilterEnum.STRATEGY)
  const battleRoyal = filterGenre(items, HomeFilterEnum.BATTLE_ROYALE)
  const sports = filterGenre(items, HomeFilterEnum.SPORTS)
  const cardGame = filterGenre(items, HomeFilterEnum.CARD_GAME)


  const getGames = async () => {


    setLoading(true)
    try {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', fetchOptions)
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later ")
      }
      const data = await response.json()

      if (data && Array.isArray(data) && data.length > 0) {

        setItems(data)

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
    getGames()
  }, [])
  console.log(items)



  return (
    <>
      <section className="mb-10">
        <div className="hero-bg   p-12 overflow-hidden rounded-2xl  ">
          <div className="max-w-lg">
            <h1 className="md:text-5xl text-4xl font-semibold mb-4 ">Next-Gen Gaming, Zero Cost</h1>
            <p className="text-lg font-light mb-8 md:max-w-2xl">Experience cutting-edge graphics, intense gameplay, and endless fun — all without spending a dime.</p>
            <Link to="/sort-by/popularity">  <PrimaryBtn title="Explore now" /></Link>

          </div>
        </div>
      </section>

      {loading && <div className="no-data">
        <div className="loader"></div>
      </div>}
      {!loading && (!items || items?.length === 0) && <div className=" no-data">
        <p>No games available!</p>
      </div>}
      {!loading && (items && items?.length > 0) &&
        <div className="space-y-10">
          <TrendinGames title={HomeFilterEnum.MMORPG} items={mmorpg} navLink="/category/mmorpg" />
          <TrendinGames title={HomeFilterEnum.SHOOTER} items={shooter} navLink="/category/shooter" />
          <TrendinGames title={HomeFilterEnum.STRATEGY} items={strategy} navLink="/category/strategy" />
          <TrendinGames title={HomeFilterEnum.BATTLE_ROYALE} items={battleRoyal} navLink="/category/battle-royale" />
          <TrendinGames title={HomeFilterEnum.SPORTS} items={sports} navLink="/category/sports" />
          <TrendinGames title={HomeFilterEnum.CARD_GAME} items={cardGame} navLink="/category/card" />
        </div>
      }




    </>


  )
}

export default Home

// <img src="/hero-img.jpg" alt="hero-img" className=" absolute  z-[1] inset-0 w-full h-full object-cover" />


