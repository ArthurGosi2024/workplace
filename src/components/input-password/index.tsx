"use client";
import {ComponentProps, useState} from "react";
import {Icon} from "@iconify/react";




interface  IInputPasswordPros extends  ComponentProps<'input'> {}

export default  function InputPassword({...rest} : IInputPasswordPros) {

    const [typeToogle,setTypeToogle] = useState<'text' | 'password'>('password')

    const onTypeToogle = () => {
        if (typeToogle === 'text') {
            setTypeToogle('password')
        }else {
            setTypeToogle('text')
        }

    }

    return <div className={'relative flex justify-center items-center h-full'}>
        <input
            type={typeToogle}
            className="w-[403px] h-12 bg-white rounded-[14px] pr-12 outline-none  px-[18px]  shadow-[0px_1px_2px_0px_rgba(184,200,224,0.22)] border border-[#d8e0ef] text-[#7d8592] text-sm font-normal font-['Nunito Sans'] leading-normal"

            {...rest}
       />
        <div className={'absolute right-4 cursor-pointer'} >
            <Icon icon={ typeToogle === 'password' ? 'clarity:eye-hide-solid' : 'clarity:eye-show-line'} color={'#7d8592'} className={'transition-all'} onClick={onTypeToogle} />
        </div>
    </div>
}