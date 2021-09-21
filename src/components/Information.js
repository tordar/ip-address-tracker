
const Information = (props) => {
    
    return (
        <div className="card">
            <h4 className='propHeader info'>{props.header}</h4>
            <h2 className="info">{props.output}</h2>
        </div>
    )
}

export default Information