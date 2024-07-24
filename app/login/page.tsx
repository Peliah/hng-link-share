'use client'

import React from 'react'
import { login, signup } from './actions'
import AuthCards from '../../components/AuthenticationCard'
import Image from 'next/image'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"


const loginSchema = z.object({
    email: z.string().email(`Can't be empty`),
    password: z.string().min(6, 'Please check again'),
});

export default function LoginPage() {

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    return (
        <div className='w-full bg-zinc-50 '>
            <div className='max-w-[1440px] min-h-screen flex flex-col items-center justify-center mx-auto gap-14'>
                <div className='flex gap-2'>
                    <Image src={require('/assets/Vector.png')} alt={''} width={33} height={33} />
                    <h2 className='text-[#333] font-bold text-3xl'>devlinks</h2>
                </div>
                <AuthCards
                    title={'Login'}
                    description={'Add your details below to get back into the app'}
                    pageTag={"Don't have an account ?"}
                    pageRedirect={"Create account"}
                    pagePath={'/signup'}
                >
                    <Form {...form}>
                        <form>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem
                                        className="mb-6"
                                    >
                                        <FormLabel className="font-normal text-xs">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} className="focus-visible:ring-[#BEADFF] focus:shadow-md focus:shadow-[#BEADFF] ring-offset-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem
                                        className="mb-6"
                                    >
                                        <FormLabel className="font-normal text-xs">Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" {...field} type="password" className="focus-visible:ring-[#BEADFF] focus:shadow-md focus:shadow-[#BEADFF] ring-offset-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="bg-[#633cff] w-full py-[27px] font-semibold text-base hover:bg-[#BEADFF]">
                                Login
                            </Button>
                        </form>
                    </Form>
                </AuthCards>
            </div>
        </div>
    )
}