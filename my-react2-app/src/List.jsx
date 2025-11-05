  function List(){
    const fruits=[ 
    { id:1, name:"apple"},
    {id:2,name:"orange"},
    {id:3,name:"banana"}
    
    ]
    const listitems = fruits.map(fruit => <li key={fruit.id}>

        {fruit.name}
        
        </li>)

    return(<ol>{listitems}</ol>)

}

export default List