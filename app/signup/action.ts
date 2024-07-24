// // // 'use server'

// // // import { revalidatePath } from 'next/cache'
// // // import { redirect } from 'next/navigation'

// // // import { createClient } from '@/utils/supabase/server'

// // // import { z } from 'zod';


// // // const loginSchema = z.object({
// // //     email: z.string().email('Invalid email'),
// // //     password: z.string().min(6, 'Password must be at least 6 characters'),
// // // });


// // // export async function signup(formData: FormData) {
// // //     const supabase = createClient()

// // //     // type-casting here for convenience
// // //     // in practice, you should validate your inputs
// // //     const data = {
// // //         email: formData.get('email') as string,
// // //         password: formData.get('password') as string,
// // //     }

// // //     const { error } = await supabase.auth.signUp(data)

// // //     if (error) {
// // //         redirect('/error')
// // //     }

// // //     revalidatePath('/', 'layout')
// // //     redirect('/')
// // // }


// // 'use server';

// // import { revalidatePath } from 'next/cache';
// // import { redirect } from 'next/navigation';
// // import { createClient } from '@/utils/supabase/server';
// // import { z } from 'zod';

// // const signupSchema = z.object({
// //     email: z.string().email('Invalid email'),
// //     password: z.string().min(6, 'Password must be at least 6 characters'),
// // });

// // export async function signup(formData: FormData) {
// //     const supabase = createClient();

// //     try {
// //         const data = signupSchema.parse(Object.fromEntries(formData.entries()));
// //         const { error } = await supabase.auth.signUp(data);

// //         if (error) {
// //             throw new Error('Signup failed');
// //         }

// //         revalidatePath('/', 'layout');
// //         redirect('/');
// //     } catch (error) {
// //         throw error; // Re-throw the error to be handled in the component
// //     }
// // }


// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '@/utils/supabase/server';
// import { z } from 'zod';

// // Define the schema for validation
// const signupSchema = z.object({
//     email: z.string().email('Invalid email'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
//     confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
// }).refine(data => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: 'Passwords do not match',
// });

// export async function signup(formData) {
//     const supabase = createClient();

//     try {
//         // Ensure the data is properly formatted and validated
//         const data = signupSchema.parse({
//             email: formData.get('email'),
//             password: formData.get('password'),
//             confirmPassword: formData.get('confirmPassword'),
//         });

//         const { error } = await supabase.auth.signUp({
//             email: data.email,
//             password: data.password,
//         });

//         if (error) {
//             throw new Error('Signup failed');
//         }

//         revalidatePath('/', 'layout');
//         redirect('/');
//     } catch (error) {
//         throw error; // Re-throw the error to be handled in the component
//     }
// }


'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

// Define the schema for validation
const signupSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
});

export async function signup(formData) {
    const supabase = createClient();

    try {
        // Ensure the data is properly formatted and validated
        const data = signupSchema.parse({
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        });

        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });

        if (error) {
            throw new Error('Signup failed');
        }

        revalidatePath('/', 'layout');
        redirect('/');
    } catch (error) {
        throw error; // Re-throw the error to be handled in the component
    }
}
