import Logout from '@/components/Logout'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function page() {
    const usuario = cookies().get('usuario')
    // console.log(usuario);

    if (usuario)
        return (
            <div>
                <h1>Dashboard de {usuario.value}</h1>
                <Logout />
            </div>
        )

    redirect('/')
}

export default page