 import React from 'react'
 import './index.css'
 import PropType from 'prop-types'
const Userdata=[
    {name:"James",city:"London",description:"night owl",profilePic:"owl.png",skills:["html","css","bootstrap","react"]},
    {name:"eams",city:"delhi",description:"tripper",profilePic:"trip1.jpeg",skills:["html","css","bootstrap","react"]},
]
function User(props){
    return <div className= "card-container">
        <span className="pro">ONLINE</span>
        <img src={props.profilePic}  alt="user"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div>
            <button>Message</button>
            <button>Add Friend</button>
        </div>
        <div className='skills'>
            <h3 >SKILLS</h3>
            <ul>
                {/* <li>html</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>REACT</li>
            
             */}
{/* the li tag is changed into the map function */}
                {props.skills.map((skill) => <li>{skill}</li>)}
            
            </ul>
        </div>

    </div>
}
 export const Usercard = () => {
   return (
    //  <div><User name="James" city="London" description="night owl" skills={["html", "css", "bootstrap", "react"]} profilePic="owl.png"/></div>
    <>
    {Userdata.map((user) => <User name={user.name} city={user.city} description={user.description} skills={user.skills} profilePic={user.profilePic} />)}</>

   )
 }
 User.prototype={name:PropType.string.isRequired,
     city:PropType.string.isRequired,
     description:PropType.string.isRequired,
     skills:PropType.array.isRequired,
     profilePic:PropType.string.isRequired
 };