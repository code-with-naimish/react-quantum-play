import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { GameDetailModel } from "../_models/game.detail.model";
import { fetchOptions } from "../_helpers/fetch-option";
import { useParams } from "react-router";
import GameCard from "../components/game-card";
import FullImg from "../components/full-img";
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
      const data = await response.json() //response is an object
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
          <div className="grid md:grid-cols-12 grid-cols-1 gap-10 mb-10">
            <div className="md:col-span-3 moveLeftAnimation">
              <div className="border border-purple-500/40  rounded-3xl p-4">
                <GameCard val={detail} />

              </div>

            </div>

            <div className="md:col-span-9 moveRightAnimation">
              <h2 className="md:text-6xl text-4xl mb-7">{detail?.title}</h2>
              <h3 className="md:text-3xl text-2xl  mb-3">Description</h3>
              <p className="text-gray mb-7 line-clamp-5">{detail?.description}</p>

              <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6">
                <div>
                  <ul className="list-none text-gray">
                    <p className="text-sm mb-3 font-bold text-white">Minimum System Requirements</p>
                    <li>Os : {detail?.minimum_system_requirements?.os ?? "--"}</li>
                    <li>Processor : {detail?.minimum_system_requirements?.processor ?? "--"}</li>
                    <li>Memory : {detail?.minimum_system_requirements?.memory ?? "--"}</li>
                    <li>Graphics : {detail?.minimum_system_requirements?.graphics ?? "--"}</li>
                    <li>Storage : {detail?.minimum_system_requirements?.storage ?? "--"}</li>
                  </ul>
                </div>
                <div >
                  <ul className="list-none text-gray">
                    <p className="text-sm mb-3 font-bold text-white">Other Details</p>
                    <li>Genre : {detail?.genre ?? "--"}</li>
                    <li>Platform : {detail?.platform ?? "--"}</li>
                    <li>Publisher : {detail?.publisher ?? "--"}</li>
                    <li>Developer : {detail?.developer ?? "--"}</li>
                    <li>Release_date : {detail?.release_date ?? "--"}</li>
                  </ul>

                </div>
              </div>
            </div>


          </div>
          {detail?.screenshots && detail?.screenshots?.length > 0 && <div className="moveBottomAnimation">
            <h2 className="text-3xl mb-8 font-semibold">{detail?.title} Screenshots</h2>
            <div className={`grid ${detail?.screenshots?.length > 3 ? 'md:grid-cols-4' : 'md:grid-cols-3'} grid-cols-1 gap-5 `}>
              {detail?.screenshots?.map((screenshot) => (
                <figure key={screenshot?.id} className="aspect-video overflow-hidden rounded-lg">
                  <FullImg src={screenshot?.image} alt={detail?.title} />

                </figure>
              ))}
            </div>
          </div>}

        </>
      }
    </div>
  )
}

export default DetailPage
