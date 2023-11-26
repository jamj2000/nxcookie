import { logout } from "@/lib/actions";

function Logout() {
    return (
        <form action={logout}>
            <button type="submit">Logout</button>
        </form>
    )
}

export default Logout


