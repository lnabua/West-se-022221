const NavBar = props => {
    console.log(props)
    return(
        <div className={`ui inverted ${props.color} menu`}>
            <a className="item">
                <h2 className="ui header">
                    <div className="content">{props.title}</div> 
                    <div className="sub header">{props.description}</div>
                </h2>
            </a>
            <select onChange={props.changeColor} class="ui search dropdown right menu">
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>
        </div>
    )
}

export default NavBar