import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import englishBorder from '../images/english_border.svg';
import thai from '../images/thai.svg';
import chinese from '../images/chinese.svg';
import imageeg from '../images/imageeg.svg';
import wavy from '../images/wavy.svg'

export default function Index(){
    return(
        <>
            <div className="flex top-0 w-full justify-between bg-deepest-blue text-lightest-blue font-manrope py-12 text-xl z-10">
                <img className="w-1/3 pl-24" src={logo} alt="logo"></img>
                <div className="flex w-3/5 items-center justify-between pr-24">
                    <div className="underline underline-offset-4 p-4">Home</div>
                    <div className="p-4">About Us</div>
                    <div className="p-4">Services</div>
                    <div className="p-4">Contact Us</div>
                    <div className="p-4">GPS Tracking</div>
                    <div className="rounded-3xl border-lightest-blue border-4 w-32 h-12 flex items-center justify-around">
                        <img src={englishBorder} alt="englishborder"></img>
                        <Link to="/th">
                            <img src={thai} alt="thai" />
                        </Link>
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
                        Carrying Your Trust.
                    </div>
                    <div className="text-xl py-8">
                        Almost 20 years of experience in the importing and exporting of fruit by truck and by air has helped us build a professional customs clearance team and custom agencies throughout each customs pass of Thailand.
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