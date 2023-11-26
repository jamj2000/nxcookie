'use server'

import { users } from '@/lib/users'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { revalidatePath } from 'next/cache'


export async function login (formData) {
    const email = await formData.get('email')
    const password = await formData.get('password')

    const encontrado = users.filter ( (u) => (u.email === email && u.password === password ))
    // console.log(encontrado);

    if (encontrado.length > 0 ) {
        cookies().set('usuario',  email) 
        revalidatePath('/dashboard');
        redirect('/dashboard')   
    }
    else {
        redirect('/')   
    }
}


export async function logout () {   
    const origin = headers().get('origin');
    // for (const [key,value] of headers().entries() ) {
    //     console.log(key, value)
    // }
    cookies().delete('usuario')
    redirect(`${origin}/`) 
}