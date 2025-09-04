import { doLogout } from "../app/actions"

const Logout = () => {
  return (
    <form action={doLogout}>
        <button className="bg-primary-1 m-2 text-white px-3 py-2 rounded cursor-pointer" type="submit">Logout</button>
    </form>
  )
}

export default Logout