import React from "react";
import AuthCards from "../../components/AuthenticationCard";
import InputBox from "../../components/InputWithIcon";

const SignUpPage = () => {
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
    );
}

export default SignUpPage;