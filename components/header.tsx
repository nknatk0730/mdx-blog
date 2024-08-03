import Link from "next/link"
import { Button } from "./ui/button"
import { Navigation } from "./navigation"

export const Header = () => {
  return (
    <div className="h-16 flex items-center px-6 border-b">
      <Button asChild className="font-bold text-xl" variant='ghost'>
        <Link href='/'>blog</Link>
      </Button>
      <Navigation />
    </div>
  )
}