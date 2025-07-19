import { Link } from "react-router";
import type { HomeFilterEnum } from "../_enum/home.filter.enum";
import type { GameModel } from "../_models/game.model"
import GameCard from "./game-card"

const TrendinGames = (props: {
  items: GameModel[],
  title: HomeFilterEnum,
  navLink: string

}) => {
  if (!props?.items || props?.items?.length === 0) return null;
  return (
    <section className="group/section">
      <div className="flex mb-8 items-center justify-between  gap-4">
        <h2 className="left-line  md:text-2xl text-lg pl-4 leading-none font-semibold">Trending {props?.title}</h2>
        <Link className="group-hover/section:md:opacity-100 md:text-base text-sm md:opacity-0 text-fuchsia-500 font-medium hover:text-fuchsia-600 transition-all duration-300" to={props?.navLink}>View All</Link>
      </div>
      <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {props?.items?.map((val, i) => {
          return <div key={i}>
            <GameCard val={val} />
          </div>
        })}
      </div>
    </section>
  )
}

export default TrendinGames