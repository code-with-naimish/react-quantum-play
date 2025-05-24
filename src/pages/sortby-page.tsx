import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { GameModel } from "../_models/game.model"
import { LuLoaderCircle } from "react-icons/lu"
import { toast } from "react-toastify"
import { fetchOptions } from "../_helpers/fetch-option"

const SortByPage = () => {

  const params = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const [items, setItems] = useState<GameModel[]>([])

  const getGames = async (sortbyID?: string) => {
    if (!sortbyID) {
      return
    }
    setLoading(true)

    try {
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortbyID}`, fetchOptions)
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
    getGames(params?.id)
  }, [params?.id])


  return (
    <div>{params.id}
      <div >
        <LuLoaderCircle className="animate-spin" />
      </div>
      {loading && <div >
        <LuLoaderCircle className="animate-spin" />
      </div>}
      {!loading && (!items || items.length === 0) && <p>No games available</p>}
      {!loading && (items && items.length > 0) &&
        <>
          {items.map((val, i) => {
            return <div key={i}>
              {val.title}
            </div>
          })}
        </>
      }
    </div>
  )
}

export default SortByPage