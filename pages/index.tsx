import Head from "next/head"

export default function Index() {
    return (
        <>
        <Head>
            <title>Seohyeon's Art Portfolio</title>
            <meta name="description" content="welcome to my imaginary world! :)"/>
            
        </Head>
            <div id="container">
                <div id = "top-section">
                    <img id = "prof-pic" src = "/points.png" alt = "test profile picture"></img>
                    <h1 id = "title"> Hello World! I'm Seohyeon.</h1>
                    <p>I'm a sophomore at Pomona College. I want to <b>explore</b> as much as possible.
                    <br/>Thanks for visiting my page!</p>
                </div>
            </div>
            <div className="flex-container">
                    <div id = "art" className = "flex-container2">
                    <h2>My Imaginary World</h2>
                        <div className = "flex-items"> 
                            <img className= "demo-image" src = "/foolbox.png" alt = "official narrrative particles forced into Point children"></img>
                            <img className= "demo-image" src = "/thoughtvoice.png" alt = "protagonist meets blue ghost in an imaginary space"></img>
                            <img className= "demo-image" src = "/with you.png" alt = "asynchronous contact of protagonist and their older self"></img>
                            <img className= "demo-image" src = "/storysharing.png" alt = "protagonist venting story-objects to their older self"></img>
                        </div>
                    </div>
                    <div id = "art" className = "flex-container2">
                        <h2>Digital Illustrations <br/>@ TSL</h2>
                        <img className= "demo-image"   src = "/shame.png" alt = "shame is a time bomb that grows coiling in your mind"></img>
                        <img className= "demo-image"   src = "/dread.png" alt = "existential dread looming over young person in a panic"></img>
                    </div>
            </div>
        </>
    );
}
