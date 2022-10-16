import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoch.svg';
import englishBorder from '../../images/english.svg';
import thai from '../../images/thai.svg';
import chinese from '../../images/chinese_border.svg';
import imageeg from '../../images/imageeg.svg';
import wavy from '../../images/wavy.svg'

export default function IndexCh(){
    return(
        <>
            <div className="flex top-0 w-full justify-between bg-deepest-blue text-lightest-blue font-manrope py-12 text-xl z-10">
                <img className="w-1/3 pl-24" src={logo} alt="logo"></img>
                <div className="flex w-3/5 items-center justify-between pr-24">
                    <div className="underline underline-offset-4 p-4">主页</div>
                    <div className="p-4">详情</div>
                    <div className="p-4">服务</div>
                    <div className="p-4">联系</div>
                    <div className="p-4">GPS追踪</div>
                    <div className="rounded-3xl border-lightest-blue border-4 w-32 h-12 flex items-center justify-around">
                        <Link to="/">
                            <img src={englishBorder} alt="englishborder" />
                        </Link>
                        <Link to="/th">
                            <img src={thai} alt="thai" />
                        </Link>
                        <img src={chinese} alt="chinese" />
                    </div>
                </div>

            </div>
            <div className="absolute z-0 top-20 right-0"><img src={wavy} alt="wavy" /></div>
            
            <div className="z-10 flex w-full bg-deepest-blue text-lightest-blue font-manrope py-20 h-full">
                <div className="w-1/2 pl-24">
                    <div className="text-6xl font-bold">
                    承载您的信任。
                    </div>
                    <div className="text-xl py-8">
                        近20年的水果卡车和空运进出口经验，帮助我们建立了专业的清关团队和海关代理，遍及泰国的每一个海关通行证。
                    </div>
                </div>
                <div className=" flex rounded-2xl w-1/2 pl-10 pr-24 h-auto items-center">
                    <img className="rounded-2xl" src={imageeg} alt="imageeg" />
                </div>
            </div>

            <div className="w-full text-center text-manrop text-lightest-blue bg-deepest-blue text-5xl font-bold py-20">
                Partners:
            </div>

        </>
    )
    
}