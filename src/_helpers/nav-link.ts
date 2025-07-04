export const navLinks: {
  label: string,
  children?: { label: string, path: string }[],
  path?: string
}[] = [
    {
      label: "Home", path: "/"
    },
    {
      label: "Category",
      children: [
        { label: "MMORPG", path: "/category/mmorpg" },
        { label: "Shooter", path: "/category/shooter" },
        { label: "Strategy", path: "/category/strategy" },
        { label: "MOBA", path: "/category/moba" },
        { label: "Racing", path: "/category/racing" },
        { label: "Sports", path: "/category/sports" },
        { label: "Social", path: "/category/social" },
        { label: "Sandbox", path: "/category/sandbox" },
        { label: "Open World", path: "/category/open-world" },
        { label: "Survival", path: "/category/survival" },
        { label: "PvP", path: "/category/pvp" },
        { label: "PvE", path: "/category/pve" },
        { label: "Pixel", path: "/category/pixel" },
        { label: "Voxel", path: "/category/voxel" },
        { label: "Zombie", path: "/category/zombie" },
        { label: "Turn-Based", path: "/category/turn-based" },
        { label: "First-Person", path: "/category/first-person" },
        { label: "Third-Person", path: "/category/third-person" },
        { label: "Top-Down", path: "/category/top-down" },
        { label: "Tank", path: "/category/tank" },
        { label: "Space", path: "/category/space" },
        { label: "Sailing", path: "/category/sailing" },
        { label: "Side-Scroller", path: "/category/side-scroller" },
        { label: "Superhero", path: "/category/superhero" },
        { label: "Permadeath", path: "/category/permadeath" },
        { label: "Card", path: "/category/card" },
        { label: "Battle Royale", path: "/category/battle-royale" },
        { label: "MMO", path: "/category/mmo" },
        { label: "MMOFPS", path: "/category/mmofps" },
        { label: "MMOTPS", path: "/category/mmotps" },
        { label: "3D", path: "/category/3d" },
        { label: "2D", path: "/category/2d" },
        { label: "Anime", path: "/category/anime" },
        { label: "Fantasy", path: "/category/fantasy" },
        { label: "Sci-Fi", path: "/category/sci-fi" },
        { label: "Fighting", path: "/category/fighting" },
        { label: "Action RPG", path: "/category/action-rpg" },
        { label: "Action", path: "/category/action" },
        { label: "Military", path: "/category/military" },
        { label: "Martial Arts", path: "/category/martial-arts" },
        { label: "Flight", path: "/category/flight" },
        { label: "Low Spec", path: "/category/low-spec" },
        { label: "Tower Defense", path: "/category/tower-defense" },
        { label: "Horror", path: "/category/horror" },
        { label: "MMORTS", path: "/category/mmorts" }
      ]
    },
    {
      label: "Platform",
      children: [
        { label: "PC", path: "/platform/pc" },
        { label: "Browser", path: "/platform/browser" }
      ]
    },

    {
      label: "Sort-by",
      children: [
        { label: "Release-Date", path: "/sort-by/release-date" },
        { label: "Popularity", path: "/sort-by/popularity" },
        { label: "Alphabetical", path: "/sort-by/alphabetical" }
      ]
    }
  ]