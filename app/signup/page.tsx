// 'use client'

// import React from 'react'
// import AuthCards from '../../components/AuthenticationCard'
// import Image from 'next/image'

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Button } from "@/components/ui/button"


// const loginSchema = z.object({
//     email: z.string().email(`Can't be empty`),
//     password: z.string().min(6, 'Please check again'),
// });

// export default function SignUpPage() {

//     const form = useForm({
//         resolver: zodResolver(loginSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//         },
//     });
//     return (
//         <div className='w-full bg-zinc-50 '>
//             <div className='max-w-[1440px] min-h-screen flex flex-col items-center justify-center mx-auto gap-14'>
//                 <div className='flex gap-2'>
//                     <Image src={require('/assets/Vector.png')} alt={''} width={33} height={33} />
//                     <h2 className='text-[#333] font-bold text-3xl'>devlinks</h2>
//                 </div>
//                 <AuthCards
//                     title={'Create account'}
//                     description={`Let's get you started sharing your links!`}
//                     pageTag={"Already have an account ?"}
//                     pageRedirect={"Login"}
//                     pagePath={'/login'}
//                 >
//                     <Form {...form}>
//                         <form>
//                             <FormField
//                                 control={form.control}
//                                 name="email"
//                                 render={({ field }) => (
//                                     <FormItem
//                                         className="mb-6"
//                                     >
//                                         <FormLabel className="font-normal text-xs">Email</FormLabel>
//                                         <FormControl>
//                                             <Input placeholder="Email" {...field} className="focus-visible:ring-transparent focus:shadow-md focus:shadow-[#BEADFF] focus:border-2 focus:border-[#BEADFF]" />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="password"
//                                 render={({ field }) => (
//                                     <FormItem
//                                         className="mb-6"
//                                     >
//                                         <FormLabel className="font-normal text-xs">Password</FormLabel>
//                                         <FormControl>
//                                             <Input placeholder="Password" {...field} type="password" className="focus-visible:ring-transparent focus:shadow-md focus:shadow-[#BEADFF] focus:border-2 focus:border-[#BEADFF]" />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="password"
//                                 render={({ field }) => (
//                                     <FormItem
//                                         className="mb-6"
//                                     >
//                                         <FormLabel className="font-normal text-xs">Confirm password</FormLabel>
//                                         <FormControl>
//                                             <Input placeholder="Confirm password" {...field} type="password" className="focus-visible:ring-transparent focus:shadow-md focus:shadow-[#BEADFF] focus:border-2 focus:border-[#BEADFF]" />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <Button className="bg-[#633cff] w-full py-[27px] font-semibold text-base hover:bg-[#BEADFF]">
//                                 Login
//                             </Button>
//                         </form>
//                     </Form>
//                 </AuthCards>
//             </div>
//         </div>
//     )
// }

'use client';

import React from 'react';
import AuthCards from '../../components/AuthenticationCard';
import Image from 'next/image';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { signup } from './action'; // Import the signup action

const signupSchema = z.object({
    email: z.string().email("Can't be empty"),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
});

export default function SignUpPage() {
    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const inputStyle = (hasError) =>
        hasError
            ? 'border-red-500 focus-visible:ring-red-500 focus:shadow-md focus:shadow-red-500'
            : 'focus-visible:ring-[#BEADFF] focus:shadow-md focus:shadow-[#BEADFF]';

    const handleSubmit = async (data) => {
        try {
            await signup(data); // Call the server-side signup function
            // Handle successful signup, e.g., redirect
        } catch (error) {
            // Handle signup error, e.g., display error message
            console.error(error);
        }
    };

    return (
        <div className='w-full bg-zinc-50 '>
            <div className='max-w-[1440px] min-h-screen flex flex-col items-center justify-center mx-auto gap-14'>
                <div className='flex gap-2'>
                    <Image src={require('/assets/Vector.png')} alt={''} width={33} height={33} />
                    <h2 className='text-[#333] font-bold text-3xl'>devlinks</h2>
                </div>
                <AuthCards
                    title={'Create account'}
                    description={`Let's get you started sharing your links!`}
                    pageTag={"Already have an account?"}
                    pageRedirect={"Login"}
                    pagePath={'/login'}
                >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel className="font-normal text-xs">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                                className={`focus-visible:ring-[#BEADFF] focus:shadow-md ring-offset-0 ${inputStyle(!!form.formState.errors.email)}`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel className="font-normal text-xs">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Password"
                                                {...field}
                                                type="password"
                                                className={`focus-visible:ring-[#BEADFF] focus:shadow-md ring-offset-0 ${inputStyle(!!form.formState.errors.password)}`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <FormLabel className="font-normal text-xs">Confirm password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Confirm password"
                                                {...field}
                                                type="password"
                                                className={`focus-visible:ring-[#BEADFF] focus:shadow-md ring-offset-0 ${inputStyle(!!form.formState.errors.confirmPassword)}`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="bg-[#633cff] w-full py-[27px] font-semibold text-base hover:bg-[#BEADFF]" type="submit">
                                Create Account
                            </Button>
                        </form>
                    </Form>
                </AuthCards>
            </div>
        </div>
    );
}
