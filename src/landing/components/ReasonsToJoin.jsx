import televizon from "../../assets/images/televizon.svg"
import watch from "../../assets/images/watch.svg"
import face from "../../assets/images/face.svg"
import dowland from "../../assets/images/dowland.svg"
import React from 'react' 
import ReasonCard from "./ReasonCard"
const ReasonsToJoin = () => {
    const items = [
        {
            title:"Enjoy on your TV",
            desc:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img:televizon
        },
        {
            title:"Download your shows to watch offline",
            desc:"Save your favorites easily and always have something to watch.",
            img:dowland
        },
        {
            title:"Watch everywhere",
            desc:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img:watch
        },
        {
            title:"Create profiles for kids",
            desc:"Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img:face
        }
    ]
  
    return (
    <div>
        <h2 className="text-white font-medium text-[24px] mb-4">More Reasons to Join</h2>
        <div className="flex gap-4">
            {items.map(item => <ReasonCard item={item}/>)}
        </div>
    </div>
  )
}

export default ReasonsToJoin