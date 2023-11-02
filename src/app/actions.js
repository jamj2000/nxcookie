'use server'

import { Users } from '@/lib/Users'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'


export async function login (formData) {
    const email = await formData.get('email')
    const password = await formData.get('password')

    const encontrado = Users.filter ( (u) => (u.email === email && u.password === password ))
    // console.log(encontrado);

    if (encontrado.length > 0 ) {
        cookies().set('usuario',  email) 
        redirect('/dashboard')       
    }
    else {
        // revalidatePath('/')        
        redirect('/')   
    }
}

export async function logout () {   
    const cabeceras = headers()
    const origin = cabeceras.get('origin');
    // for (const par of cabeceras.entries() ) {
    //     console.log(par[0], par[1])
    // }
    cookies().delete('usuario')
    // NextResponse.redirect(new URL('/', origin))
    // redirect('/') 
    redirect(`${origin}/`)  
}