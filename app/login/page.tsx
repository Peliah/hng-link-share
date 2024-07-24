import React from 'react'
import { login, signup } from './actions'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import InputBox from '../../components/InputWithIcon'
import AuthCards from '../../components/AuthenticationCard'

export default function LoginPage() {
    return (
        <div className='w-full bg-zinc-50 '>
            <div className='max-w-[1440px] min-h-screen flex items-center justify-center mx-auto'>
                <AuthCards title={'Login'} description={'Add your details below to get back into the app'}>
                    <InputBox />
                    <InputBox />
                    <InputBox />
                </AuthCards>
            </div>
        </div>
    )
}