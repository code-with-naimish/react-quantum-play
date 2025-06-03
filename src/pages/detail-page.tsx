import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { GameDetailModel } from "../_models/game.detail.model";
import { fetchOptions } from "../_helpers/fetch-option";
import { useParams } from "react-router";
// import GameCard from "../components/game-card";

const DetailPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<GameDetailModel | null>();


  const getGames = async (detailId?: string) => {
    if (!detailId) {

      return
    }

    setLoading(true)
    try {
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${detailId}`, fetchOptions)
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later ")
      }
      const data = await response.json()
      setDetail(data)



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

  console.log(detail)

  return (

    <div className="p-4">
      {loading && <div className="no-data">
        <div className="loader"></div>
      </div>}
      {!loading && !detail && <div className=" no-data">
        <p>No games available!</p>
      </div>}

      {!loading && detail &&
        <>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div className=" bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transition duration-500 hover:scale-105">
                <div className="h-[134px]">
                  <img className=" object-cover w-full h-full" src={detail.thumbnail} alt={detail.title} />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold mb-2">{detail.title}</h2>
                  <p className="text-base text-gray">{detail.short_description}</p>
                </div>
              </div>
            </div>

            <div className="col-span-9 p-8">
              <h2 className="text-6xl mb-7">{detail.title}</h2>
              <h3 className="text-3xl mb-3">Description</h3>
              <p className="text-gray mb-7 line-clamp-5">{detail.description}</p>

              <div className="flex justify-between ">
                <div>
                  <ul className="list-none text-gray">
                    <p className="text-sm mb-3 font-bold text-white">Minimum System Requirements</p>
                    <li>Os : {detail.minimum_system_requirements?.os}</li>
                    <li>Processor : {detail.minimum_system_requirements?.processor}</li>
                    <li>Memory : {detail.minimum_system_requirements?.memory}</li>
                    <li>Graphics : {detail.minimum_system_requirements?.graphics}</li>
                    <li>Storage : {detail.minimum_system_requirements?.storage}</li>
                  </ul>
                </div>
                <div >
                  <ul className="list-none text-gray">
                    <p className="text-sm mb-3 font-bold text-white">Other Details</p>
                    <li>Genre : {detail.genre}</li>
                    <li>Platform : {detail.platform}</li>
                    <li>Publisher : {detail.publisher}</li>
                    <li>Developer : {detail.developer}</li>
                    <li>Release_date : {detail.release_date}</li>
                  </ul>

                </div>
              </div>
            </div>


          </div>
          <div>
            <h2 className="text-3xl mb-8 font-semibold">{detail.title} Screenshots</h2>
            <div className="grid grid-cols-3 gap-5 ">
              {detail.screenshots.map((screenshot) => (
                <img className="w-full h-[208px] rounded-2xl loaded" key={screenshot.id} src={screenshot.image} alt={`${detail.title} screenshot`} />
              ))}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default DetailPage
