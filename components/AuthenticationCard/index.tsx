import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InputBox from "../InputWithIcon";


const AuthCards = ({ title, description, children, btnTitle, pageTag, pageRedirect }) => {
    return (
        <Card className='max-w-[476px] w-full p-4 bg-white rounded-xl'>
            <CardHeader className="">
                <CardTitle className="font-bold text-3xl text-[#333333] mb-2">{title}</CardTitle>
                <CardDescription className="text-base font-normal text-neutral-500">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Button className="bg-[#633cff]">
                    {btnTitle}
                </Button>
                <h2>{pageTag} <span><Button variant="link" className="text-[#633cff]">{pageRedirect}</Button></span></h2>
            </CardFooter>
        </Card>
    );
}

export default AuthCards;