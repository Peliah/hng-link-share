'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

// export async function login(formData: FormData) {
//     const supabase = createClient()

//     // type-casting here for convenience
//     // in practice, you should validate your inputs
//     const data = {
//         email: formData.get('email') as string,
//         password: formData.get('password') as string,
//     }

//     const { error } = await supabase.auth.signInWithPassword(data)

//     if (error) {
//         redirect('/error')
//     }

//     revalidatePath('/', 'layout')
//     redirect('/')
// }

import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

// export async function login(formData) {
//     const supabase = createClient();

//     try {
//         const data = loginSchema.parse(Object.fromEntries(formData.entries()));

//         const { error } = await supabase.auth.signInWithPassword(data);

//         if (error) {
//             throw new Error('Login failed');
//         }

//         revalidatePath('/', 'layout');
//         redirect('/');
//     } catch (error) {
//         throw error; // This error will be caught in the component
//     }
// }



// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '@/utils/supabase/server';
// import { z } from 'zod';

// // Define the schema for validation
// const loginSchema = z.object({
//     email: z.string().email('Invalid email'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
// });

export async function login(formData) {
    const supabase = createClient();

    try {
        // Ensure the data is properly formatted and validated
        const data = loginSchema.parse({
            email: formData.email,
            password: formData.password,
        });

        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (error) {
            throw new Error('Login failed');
        }

        revalidatePath('/', 'layout');
        redirect('/');
    } catch (error) {
        throw error; // Re-throw the error to be handled in the component
    }
}


export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}