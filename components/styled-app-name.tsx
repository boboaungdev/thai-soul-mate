import { APP_NAME } from "@/constants"
import { cn } from "@/lib/utils"

type StyledAppNameProps = {
  name?: string
  goldColorClass?: string
  pinkColorClass?: string
}

export function StyledAppName({
  name = APP_NAME,
  goldColorClass = "text-gold",
  pinkColorClass = "text-pink",
}: StyledAppNameProps) {
  const words = name.split(" ")

  if (words.length < 2) {
    return <span className={goldColorClass}>{name}</span>
  }

  const firstWord = words[0]
  const restOfWords = words.slice(1).join(" ")

  return (
    <>
      <span className={cn(goldColorClass, "font-bold")}>{firstWord}</span>{" "}
      <span className={cn(pinkColorClass, "font-bold")}>{restOfWords}</span>
    </>
  )
}
