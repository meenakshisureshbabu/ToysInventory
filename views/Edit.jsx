import React from 'react'

function Edit({toy,category}) {
    console.log(toy);
    console.log(category)
  return (
    <div style={{border:"solid black",height:"100vh",background:"linear-gradient(to right,red 0%,pink 50%,lightgreen 50%, green 100%"}}>
    <h2 style={{textAlign:"center"}}>EDIT TOY</h2>
    <div style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
        
        <form action={`/update/${toy._id}?_method=PUT`} method='POST'>
            <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",flexDirection:"column",gap:"2rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Name of the Toy : </label><input type="text" name="name" defaultValue={toy.name}></input></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Category : </label><select name="category" id="category" defaultValue={toy.category}>
                {
                    category.map((cat) => {
                        return <option>{cat.name}</option>
                    })
                }
                
            </select></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Gender : </label><select name="gender" id="gender" defaultValue={toy.gender}>
                <option>Boy</option>
                <option>Girl</option>
            </select></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Quantity : </label><input type="text" name="quantity" defaultValue={toy.quantity}></input></div>
            <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}><label>Age: </label><select name="age" id="age" defaultValue={toy.age}>
                <option>0-3</option>
                <option>4-6</option>
                <option>6-10</option>
            </select></div>
            <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}><input style={{width:"200px",height:"50px",cursor:"pointer",borderRadius:"5px",background:"linear-gradient(to right,red 0%,red 50%,green 50%, green 100%"}} type="submit" value="Update Toy"></input></div>
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

export default Edit