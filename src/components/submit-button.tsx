'use client';

import React from "react";
import {FaPaperPlane} from "react-icons/fa";
// ts-ignore because experimental_useFormStatus is not in the types
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton(){

    const { pending } = useFormStatus();

    return (

        <button type='submit'
                className='group flex flex-row items-center justify-center
                                 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none gap-2
                                 shadow hover:shadow-md cursor-pointer
                                 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
                                 disabled:scale-100 disabled:bg-opacity-65
                                 transition-all'
                disabled={pending}
        >
            {
                pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                    : (
                    <>
                        Submit <FaPaperPlane className='text-xs opacity-80
                                            group-hover:translate-x-1 group-hover:-translate-y-1
                                            transition' />
                    </>
                    )
            }

        </button>

    );
}
