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
    <div>
      <h2 className="flex items-center justify-center text-xl underline underline-offset-8 mb-5 font-bold">{params.id}</h2>
      {/* <div >
        <LuLoaderCircle className="animate-spin" />
      </div> */}
      {loading && <div >
        <LuLoaderCircle className="animate-spin" />
      </div>}
      {!loading && (!items || items.length === 0) && <p>No games available</p>}
      {!loading && (items && items.length > 0) &&
        <div className="grid grid-cols-3 gap-7">
          {items.map((val, i) => {
            return <div key={i} >
              <div className="bg-gray-800 rounded-2xl overflow-hidden">
                <div className="h-[201px]">
                  <img className=" w-full h-full object-cover" src={val.thumbnail} alt={val.title} />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray mb-1">{val.genre}</p>
                  <p className="text-xl font-bold  mb-3">{val.title}</p>
                  <p className="text-base text-gray truncate">{val.short_description}</p>
                </div>


              </div>
            </div>
          })}
        </div>
      }
    </div>
  )
}

export default SortByPage