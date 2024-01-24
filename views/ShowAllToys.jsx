import React from 'react'

function ShowAllToys({toys}) {
  return (
    <div  style={{height:"100vh",background:"linear-gradient(to right,red 0%,pink 50%,lightgreen 50%, green 100%"}}>
    <div>
      <h2 style={{textAlign:"center"}}> LIST OF TOYS IN SANTA'S BAG</h2>
      
      <div style={{display:"grid",gridTemplateColumns:"15rem 15rem 15rem 15rem 15rem 15rem",marginLeft:"2rem"}}>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <b>NAME</b>
            </div>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <b>CATEGORY</b>
            </div>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <b>GENDER</b>
            </div>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <b>QUANTITY</b>
            </div>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <div>AGE</div>
            </div>
            <div style={{textAlign:"center",border:"solid black",backgroundColor:"white"}}>
              <div>ACTION</div>
            </div>
          </div>
      {
      toys.map((toy) => {
        return(

          <div style={{display:"grid",gridTemplateColumns:"15rem 15rem 15rem 15rem 15rem 15rem",marginLeft:"2rem"}}>
            <div style={{textAlign:"center",border:"solid black"}}>
              {toy.name}
            </div>
            <div style={{textAlign:"center",border:"solid black"}}>
              {toy.category}
            </div>
            <div style={{textAlign:"center",border:"solid black"}}>
              {toy.gender}
            </div>
            <div style={{textAlign:"center",border:"solid black"}}>
              {toy.quantity}
            </div>
            <div style={{textAlign:"center",border:"solid black"}}>
              {toy.age}
            </div>
            <div style={{textAlign:"center",border:"solid black",display:"flex",justifyContent:"center",gap:"2rem"}}>
              <div>
                <form action={`/edittoy/${toy._id}`} method='GET'><button style={{cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}}>EDIT</button></form></div>
              <div>
                <form action={`/deletetoy/${toy._id}?_method=DELETE`} method='POST'><button style={{cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}}>DELETE</button></form></div>
              </div>
          </div>
        )
      })
      }
      <form action='/' method='GET'>
      <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{width:"200px",height:"50px",cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}}>BACK</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default ShowAllToys