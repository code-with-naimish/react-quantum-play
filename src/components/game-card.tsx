import type { GameModel } from "../_models/game.model"
import { Link } from "react-router";
import { LuLaptopMinimal } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { convertYYYYMMDDtoDate } from "../_helpers/date-methods";
import OutlineBtn from "./outline-btn";
import FullImg from "./full-img";

const GameCard = (props: {
  val: GameModel
}

) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePlayNow = (e: any) => {
    e.preventDefault();
    window.open(props?.val?.game_url, '_blank');


  }

  const isPcGame = props?.val?.platform.includes('PC (Windows)')

  return (
    <Link className="group flex flex-col  h-full " to={`/detail/${props?.val?.id}`}>
      <div className="aspect-video rounded-lg relative overflow-hidden mb-3">
        <div className="absolute inset-0 bg-gradient-to-r  from-transparent via-black/20 to-black/70 z-[1] "></div>
        <FullImg src={props?.val?.thumbnail} alt={props?.val?.title} />
        <div title="Genre" className="absolute top-2 right-2 z-[2]">
          <p className="bg-fuchsia-500/30 border border-fuchsia-500/60 text-white text-xs px-2 py-1 leading-none font-medium rounded-4xl">{props?.val?.genre}</p>
        </div>
        <div className="absolute bottom-2 right-2 z-[2]">
          <div className="w-6 h-6 flex-none text-sm rounded-full flex items-center justify-center   bg-fuchsia-500/30 text-white border border-fuchsia-500/60">
            {isPcGame ? <LuLaptopMinimal title="PC Game" /> : <CiGlobe title="Browser Game" />}
          </div>
        </div>

      </div>


      <div className="flex-1">

        <p className=" text-base font-medium  mb-2
         flex items-start gap-2 group-hover:text-fuchsia-500 transition-all duration-300">

          <span>{props?.val?.title}</span>

        </p>
        <p title={props?.val?.short_description} className="text-sm text-white/70 two-line-ellipsis">{props?.val?.short_description}</p>
      </div>

      <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-4 mt-6">
        <span className="text-xs text-white/50 ">{convertYYYYMMDDtoDate(props?.val?.release_date)}</span>

        <OutlineBtn title="Play Now" disabled={!props?.val?.game_url} onClick={handlePlayNow} />


      </div>


    </Link>
  )
}

export default GameCard

// Link to={`/detail/props.val.id`}