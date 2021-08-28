
const Information = (props) => {
    return (
        <div className="card">
            <h4 className='propHeader'>{props.header}</h4>
            <h2>{props.output}</h2>
        </div>
    )
}

export default Information