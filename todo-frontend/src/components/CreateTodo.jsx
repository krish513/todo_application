import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }}
        onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}
        type="text" placeholder="title"></input> <br></br>
        <input style={{
            padding: 10,
            margin: 10
        }}
        onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }}
        type="text" placeholder="description"></input> <br></br>

        <button style={{
            padding: 5,
            margin: 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json"
                }
            })
                .then(async function(response){
                    const data = await response.json();
                    alert("Todo aded")
                })

        }}
        >Add todo</button>
    </div>
}