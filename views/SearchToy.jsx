import React from 'react'
import ShowAllToys from './ShowAllToys'

function SearchToy({category,alltoys}) {
  return (
    <div style={{border:"solid black",height:"100vh",background:"linear-gradient(to right,red 0%,pink 50%,lightgreen 50%, green 100%"}}>
    <h2 style={{textAlign:"center"}}>SEARCH BAG</h2>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        
        <form action="/searchtoy/search" method='POST'>
            <div style={{display:"flex",justifyContent:"space-evenly",gap:"5rem"}}>
            
            <div><label>Category : </label><select name="category" id="category">
                {
                    category.map((cat) => {
                        return <option>{cat.name}</option>
                    })
                }
                
            </select></div>
            <div><label>Gender : </label><select name="gender" id="gender">
                <option>Boy</option>
                <option>Girl</option>
            </select></div>
            
            <div><label>Age: </label><select name="age" id="age">
                <option>0-3</option>
                <option>4-6</option>
                <option>6-10</option>
            </select></div>
            <div><input style={{width:"200px",cursor:"pointer",borderRadius:"5px"}} type="submit" value="SEARCH BAG"></input></div>
            </div>
        </form>
        <form action='/searchtoy' method='GET'>
          <button style={{borderRadius:"5px",width:"200px",cursor:"pointer"}}>CLEAR SEARCH</button>
        </form>
    </div>
    <ShowAllToys toys={alltoys}/>
    
    <form action='/' method='GET'>
      <div  style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{width:"200px",height:"50px",cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}}>BACK</button>
      </div>
      </form>
    </div>
  )
}

export default SearchToy