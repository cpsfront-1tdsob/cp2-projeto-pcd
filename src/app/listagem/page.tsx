import Listagem from "@/components/Listagem/Listagem"
import { isUserLoggedIn } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ListagemPage() {
  const loggedIn = await isUserLoggedIn()

  if (!loggedIn) {
    redirect("/login")
  }

  return (
    <div>
      <Listagem />
    </div>
  )
}
