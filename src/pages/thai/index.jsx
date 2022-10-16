import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoth.svg';
import englishBorder from '../../images/english.svg';
import thai from '../../images/thai_border.svg';
import chinese from '../../images/chinese.svg';
import imageeg from '../../images/imageeg.svg';
import wavy from '../../images/wavy.svg'

export default function IndexTh(){
    return(
        <>
            <div className="flex top-0 w-full justify-between bg-deepest-blue text-lightest-blue font-manrope py-12 text-xl z-10">
                <img className="w-1/3 pl-24" src={logo} alt="logo"></img>
                <div className="flex w-3/5 items-center justify-between pr-24">
                    <div className="underline underline-offset-4 p-4">หน้าหลัก</div>
                    <div className="p-4">เกี่ยวกับเรา</div>
                    <div className="p-4">บริการ</div>
                    <div className="p-4">ติดต่อ</div>
                    <div className="p-4">ติดตามรถ</div>
                    <div className="rounded-3xl border-lightest-blue border-4 w-32 h-12 flex items-center justify-around">
                        <Link to="/">
                            <img src={englishBorder} alt="englishborder" />
                        </Link>
                        <img src={thai} alt="thai" />
                        <Link to="/ch">
                            <img src={chinese} alt="chinese" />
                        </Link>
                    </div>
                </div>

            </div>
            <div className="absolute z-0 top-20 right-0 w-screen"><img className="w-full pointer-events-none" src={wavy} alt="wavy" /></div>
            
            <div className="z-10 flex w-full bg-deepest-blue text-lightest-blue font-manrope py-20 h-full">
                <div className="w-1/2 pl-24">
                    <div className="text-6xl font-bold">
                        แบกรับความไว้วางใจ
                    </div>
                    <div className="text-xl py-8">
                    ประสบการณ์เกือบ 20 ปี ในการนำเข้า และส่งออกผลไม้ทั้งทางบก และทางอากาศ ช่วยให้เราสร้างสรรค์ทีมงานมืออาชีพในพิธีการทางศุลกากร และมีเอเย่นต์ทางด้านศุลกากร ตามด่านศุลกากรต่าง ๆ ทั่วประเทศไทย
                    </div>
                </div>
                <div className=" flex rounded-2xl w-1/2 pl-10 pr-24 h-auto items-center z-10">
                    <img className="rounded-2xl" src={imageeg} alt="imageeg" />
                </div>
            </div>

            <div className="w-full text-center text-manrop text-lightest-blue bg-deepest-blue text-5xl font-bold py-20">
                Partners:
            </div>

        </>
    )
    
}