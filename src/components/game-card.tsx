import type { GameModel } from "../_models/game.model"
import { Link } from "react-router";
import { LuLaptopMinimal } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { convertYYYYMMDDtoDate } from "../_helpers/date-methods";
import { CiPlay1 } from "react-icons/ci";

const GameCard = (props: {
  val: GameModel
}

) => {
  const handlePlayNow = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.open(props?.val?.game_url, '_blank');


  }

  const isPcGame = props?.val?.platform === 'PC (Windows)'

  return (
    <Link className="group flex flex-col  h-full " to={`/detail/${props?.val?.id}`}>
      <div className="aspect-video rounded-lg relative overflow-hidden mb-3">
        <div className="absolute inset-0 bg-gradient-to-r  from-transparent via-black/20 to-black/70 "></div>
        <img className=" w-full h-full object-cover" src={props?.val?.thumbnail} alt={props?.val?.title} />
        <div title="Genre" className="absolute top-2 right-2">
          <p className="bg-fuchsia-500/30 border border-fuchsia-500/60 text-white text-xs px-2 py-1 leading-none font-medium rounded-4xl">{props?.val?.genre}</p>
        </div>
        <div className="absolute bottom-2 right-2">
          <div className="w-6 h-6 flex-none text-sm rounded-full flex items-center justify-center   bg-fuchsia-500/30 text-white border border-fuchsia-500/60">
            {isPcGame ? <LuLaptopMinimal title="PC Game" /> : <CiGlobe title="Browser Game" />}
          </div>
        </div>

      </div>

      <div className="flex-1">

        <p className=" text-base font-medium  mb-2 flex items-start gap-2 group-hover:text-fuchsia-500 transition-all duration-300">

          <span>{props?.val?.title}</span>

        </p>
        <p title={props?.val?.short_description} className="text-sm text-white/70 two-line-ellipsis">{props?.val?.short_description}</p>
      </div>

      <div className="flex items-center justify-between gap-4 mt-6">
        <span className="text-xs text-white/50 ">{convertYYYYMMDDtoDate(props?.val?.release_date)}</span>
        <button disabled={!props?.val?.game_url} onClick={handlePlayNow}
          className="text-fuchsia-500 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs flex items-center gap-1.5"><CiPlay1 /> Play Now</button>

      </div>


    </Link>
  )
}

export default GameCard

// Link to={`/detail/props.val.id`}