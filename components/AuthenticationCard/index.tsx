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
import Link from "next/link";


const AuthCards = ({ title, description, children, pageTag, pageRedirect, pagePath }) => {
    return (
        <Card className='max-w-[476px] w-full p-4 bg-white rounded-xl border-none'>
            <CardHeader className="">
                <CardTitle className="font-bold text-3xl text-[#333333] mb-2">{title}</CardTitle>
                <CardDescription className="text-base font-normal text-neutral-500">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className='flex-col'>

                <h2 className="text-[#888888]  font-normal text-center text-base ">
                    {pageTag}
                    <span>
                        <Button variant="link" className="text-[#633cff]  font-normal text-center text-base hover:text-[#BEADFF]">
                            <Link href={pagePath}>{pageRedirect}</Link>
                        </Button>
                    </span>
                </h2>
            </CardFooter>
        </Card>
    );
}

export default AuthCards;