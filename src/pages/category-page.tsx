
import { useParams } from "react-router";
import { fetchOptions } from "../_helpers/fetch-option";
import { useEffect, useState } from "react";
import type { GameModel } from "../_models/game.model";



const CategoryPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<GameModel[]>([]);


  const getGames = async (categoryId?: string) => {
    if (!categoryId) {
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryId}`, fetchOptions)
      const data = await response.json()

      if (data && Array.isArray(data) && data.length > 0) {

        setItems(data)
      }


    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    getGames(params?.id)
  }, [params?.id])


  return (
    <div>
      {params.id}
      <button onClick={() => getGames(params?.id)} className=" bg-red-500">nhvbvmb</button>
    </div>
  )
}

export default CategoryPage