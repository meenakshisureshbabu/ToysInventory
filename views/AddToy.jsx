import React from 'react'

function AddToy({category}) {
  return (
    <div style={{border:"solid black",height:"100vh",background:"linear-gradient(to right,red 0%,pink 50%,lightgreen 50%, green 100%"}}>
    <h2 style={{textAlign:"center"}}>Add Toy To Bag</h2>
    <div style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
        
        <form action='/showalltoys' method='POST'>
            <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",flexDirection:"column",gap:"2rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Name of the Toy : </label><input type="text" name="name" required></input></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Category : </label><select name="category" id="category" required>
                {
                    category.map((cat) => {
                        return <option>{cat.name}</option>
                    })
                }
                
            </select></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Gender : </label><select name="gender" id="gender">
                <option>Boy</option>
                <option>Girl</option>
            </select></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Quantity : </label><input type="text" name="quantity" required></input></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Age: </label><select name="age" id="age">
                <option>0-3</option>
                <option>4-6</option>
                <option>6-10</option>
            </select></div>
            <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}><input style={{width:"200px",height:"50px",cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}} type="submit" value="Add to Bag"></input></div>
            </div>
        </form>
    </div>
    <form action='/' method='GET'>
      <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{width:"200px",height:"50px",cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}}>BACK</button>
      </div>
      </form>
    </div>
  )
}

export default AddToy