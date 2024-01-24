import React from 'react'

function Home() {
  return (
    <div style={{width:"100vw",height:"100vh",background:"linear-gradient(to right,red 0%,pink 50%,lightgreen 50%, green 100%"}}>
        <h1 style={{color:"white",textAlign:"center",fontFamily:"cursive"}}>Santa's Bag of Happiness</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <form action='/addnewtoy' method='GET'>
          <button style={{borderRadius:"5px",backgroundColor:"green",width:"200px",height:"50px",cursor:"pointer",fontFamily:"cursive"}}>FILL UP THE BAG</button>
        </form>
        <form action='/showalltoys' method='GET'>
          <button style={{borderRadius:"5px",backgroundColor:"red",width:"200px",height:"50px",cursor:"pointer",fontFamily:"cursive"}}>SHOW ALL TOYS</button>
        </form>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"5rem"}}>
        <form action='/searchtoy' method='GET'>
          <button style={{borderRadius:"5px",backgroundColor:"green",width:"200px",height:"50px",cursor:"pointer",fontFamily:"cursive"}}>SEARCH TOY</button>
        </form>
        <form action='/showalldeletedtoys' method='GET'>
          <button style={{borderRadius:"5px",backgroundColor:"red",width:"200px",height:"50px",cursor:"pointer",fontFamily:"cursive"}}>DELETED TOYS</button>
        </form>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <img style={{width:"300px",height:"300px"}} src="https://static.vecteezy.com/system/resources/previews/026/851/338/non_2x/santa-claus-holding-gift-bag-christmas-theme-elements-3d-illustration-png.png" alt='#'></img>
        </div>
    </div>
  )
}

export default Home