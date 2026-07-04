import { APP_NAME } from "@/constants"

type StyledAppNameProps = {
  name?: string;
  goldColorClass?: string;
  pinkColorClass?: string;
}

export function StyledAppName({
  name = APP_NAME,
  goldColorClass = "text-[#a47b3b]", // Using the color found in footer/nav-bar
  pinkColorClass = "text-[#d96088]", // Using the color found in nav-bar
}: StyledAppNameProps) {
  const words = name.split(" ")

  if (words.length < 2) {
    return <span className={goldColorClass}>{name}</span>
  }

  const firstWord = words[0]
  const restOfWords = words.slice(1).join(" ")

  return (
    <>
      <span className={goldColorClass}>{firstWord}</span>{" "}
      <span className={pinkColorClass}>{restOfWords}</span>
    </>
  )
}
