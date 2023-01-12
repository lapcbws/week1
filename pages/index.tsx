import Head from "next/head"
import {Project} from "../components/Project"

const imaginary_world = [{src: "/foolbox.png",
alt: "official narrrative particles forced into Point children"},
{ src:"/thoughtvoice.png",
alt:"protagonist meets blue ghost in an imaginary space"},
{src: "/withyou.png", alt: "asynchronous contact of protagonist and their older self"},
{ src: "/storysharing.png",
alt:"protagonist venting story-objects to their older self"}];

const tsl_graphics = [{ src:"/dread.png",
alt:"existential dread looming over young person in a panic"},
{src:"/shame.png",
alt:"shame is a time bomb that grows coiling in your mind"},
{src:"/shade.png",
alt:"Illustration to article about heatwave. Light-green blob is melting in a background fizzling into red and yellow. It has a thought bubble on top of it depicting a forest.",
url:"https://tsl.news/opinion-the-5cs-need-to-be-more-shady/"},
{src:"/hybrid-learning.png",
alt:"illustration to article about hybrid learning. ",
url:"https://tsl.news/opinion-the-5cs-should-make-their-courses-hybrid-flexible-this-semester/"}
]

export default function Index() {
    return (
        <>
        <Head>
            <title>Seohyeon Lee</title>
            <meta name="description" content="welcome to my imaginary world! :)"/>
            
        </Head>
            <div id="profile">
                <div id = "top-section">
                    <img id = "prof-pic" src = "/points.png" alt = "test profile picture"></img>
                    <h1 id = "title"> Seohyeon Lee</h1>
                    <p>I absorb stories from my life and put them out. </p>
                </div>
            </div>
            <div className="flex-container">

                    <div id = "art" className = "flex-container2">
                    <h2>My Imaginary World</h2>
                        <div className = "flex-items"> 
                        {imaginary_world.map(elem => (
                            <Project
                            src={elem.src}
                            alt={elem.alt}
                            />
                        ))}
                        </div>
                    </div>
                    <div id = "block" className = "block">
                    </div>
                    <div id = "art" className = "flex-container2">
                        <h2>Digital Illustrations <br/>@ TSL</h2>
                        {tsl_graphics.map(elem => (
                            <Project
                            src={elem.src}
                            alt={elem.alt}
                            url={elem.url}
                            />
                        ))}

                        
                    </div>
            </div>
        </>
    );
}
