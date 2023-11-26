import Logout from '@/components/Logout'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link';

function page() {
    const usuario = cookies().get('usuario')

    if (usuario)
        return (
            <div>
                <h1>Dashboard de {usuario.value}</h1>
                <h3><Link href="/">Ir a Página principal</Link></h3>
                <Logout />
            </div>
        )
    else {
        redirect('/')
    }
}

export default page