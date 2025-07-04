import { useParams } from "react-router"
import GameList from "../components/game-list"

const SortByPage = () => {

  const params = useParams();
  const id = params.id;
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${id}`

  return (
    <GameList title={id ?? ""} url={url} />
  )
}

export default SortByPage