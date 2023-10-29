import Login from '@/components/Login'
import Logout from '@/components/Logout'
import { cookies } from 'next/headers'
import Link from 'next/link';


export default function Home() {

  const cookie = cookies().get('usuario');
  if (cookie) console.log('page ', cookie)
  else console.log('page - cookie no encontrada');

  if (cookies().get('usuario')){
    return (
      <main>
        <h1>Página principal</h1>
        <h3><Link href="/dashboard">Ir a Dashboard</Link></h3>
        <Logout />
      </main>

    )
  }
  else{
    return (
      <main>
        <h1>Página principal</h1>
        <h3><Link href="/dashboard">Ir a Dashboard</Link></h3>
        <Login />        
        <p>Puedes usar cualquiera de las siguentes credenciales:</p>
        <ul>
          <li>user1@example.com   1234</li>
          <li>user2@example.com   2345</li>
          <li>user3@example.com   3456</li>
        </ul>
      </main>
      )
    }  
  }



