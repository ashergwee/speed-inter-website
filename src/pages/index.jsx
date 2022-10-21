import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import englishBorder from '../images/english_border.svg';
import thai from '../images/thai.svg';
import chinese from '../images/chinese.svg';
import imageeg from '../images/imageeg.svg';
import wavy from '../images/wavy.svg';
import scroll from '../images/scroll_prompt.svg';
import mac_truck from '../images/macbook_truck.svg';
import truckIcon from '../images/truckIcon.svg';
import arrowIcon from '../images/arrowIcon.svg';
import boxIcon from '../images/boxIcon.svg';
import iceIcon from '../images/iceIcon.svg';

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
                <div className=" flex rounded-2xl w-1/2 pl-10 pr-24 h-auto items-center z-10 justify-end">
                    <img className="rounded-2xl w-full" src={imageeg} alt="imageeg" />
                </div>
            </div>

            <div className="w-full flex justify-center bg-deepest-blue py-20">
                <img src={scroll} alt="scrollprompt" />
            </div>

            <div className="h-64 bg-deepest-blue"/>
            <div className="w-full text-center text-6xl font-bold bg-deepest-blue text-lightest-blue py-12">
                Services You Trust. 
            </div>
            <div className="flex justify-center overflow-visible h-0 bg-deepest-blue pb-20">
                <div className="w-full">
                    <div className="w-full flex justify-center">
                        <img className="h-fit w-3/5 z-20" src={mac_truck} alt="macTruck" />
                    </div>  
                    <div className="w-full text-center text-6xl font-bold bg-lightest-blue text-deepest-blue z-20 py-12">
                        What do we provide?
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="text-deepest-blue text-xl text-center w-3/5">
                            We provide various truck specifications and forms of land transport, covering the cities of Thailand and places all over SEA.
                        </div>
                    </div>
                    <div className="h-48 w-full bg-deepest-blue z-10 rotate-180">
                        <div className="bg-lightest-blue w-full h-full rounded-t-curved scale-x-150 z-0"></div>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 text-lightest-blue py-20 bg-deepest-blue justify-items-center gap-y-10">
                        <div className="w-4/5 h-full bg-lightest-blue rounded-xl flex p-3">
                            <div className="w-1/4 p-3 bg-deep-blue rounded-xl flex justify-center items-center">
                                <img className="w-5/6 h-5/6" src={arrowIcon} alt="arrowIcon" />
                            </div>
                            <div className="text-deepest-blue text-xl text-right flex items-center justify-center w-full h-full pl-5">
                                Custom clearance agency servicies of import and export files. 
                            </div>

                        </div>
                        <div className="w-4/5 h-full bg-lightest-blue rounded-xl flex p-3">
                            <div className="w-1/4 p-3 bg-deep-blue rounded-xl flex justify-center items-center">
                                <img className="w-5/6 h-5/6" src={truckIcon} alt="arrowIcon" />
                            </div>
                            <div className="text-deepest-blue flex flex-col items-center justify-center w-full h-full pl-5">
                                <div className="font-bold w-full text-2xl text-right">
                                    400+
                                </div>
                                <div className="text-xl text-right w-full">    
                                    dry container trucks
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5 h-full bg-lightest-blue rounded-xl flex p-3">
                            <div className="w-1/4 p-3 bg-deep-blue rounded-xl flex justify-center items-center">
                                <img className="w-5/6 h-5/6" src={boxIcon} alt="arrowIcon" />
                            </div>
                            <div className="text-deepest-blue flex flex-col items-center justify-center w-full h-full pl-5">
                                <div className="font-bold w-full text-2xl text-right">
                                    300+
                                </div>
                                <div className="text-xl text-right w-full">    
                                    trailers, dry-van trailers for dry cargo
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5 h-full bg-lightest-blue rounded-xl flex p-3">
                            <div className="w-1/4 p-3 bg-deep-blue rounded-xl flex justify-center items-center">
                                <img className="w-5/6 h-5/6" src={iceIcon} alt="arrowIcon" />
                            </div>
                            <div className="text-deepest-blue flex flex-col items-center justify-center w-full h-full pl-5">
                                <div className="font-bold w-full text-2xl text-right">
                                    300+
                                </div>
                                <div className="text-xl text-right w-full">    
                                    45ft containers for frozen and dry goods
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-48 w-full bg-deepest-blue z-10">
                <div className="bg-lightest-blue w-full h-full rounded-t-curved scale-x-150 z-0"></div>
            </div>
            

       



        </>
    )
    
}