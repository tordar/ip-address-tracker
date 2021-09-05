// import arrow from '../images/icon-arrow.svg'


export const SearchBar = ({
    ipAddress, setipAddress}
    ) => {
    // let output = 0

    const inputTextHandler = (e) => {
        setipAddress(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            inputTextHandler(e)
        }
      }

    return (
        <form>
            <input 
                class='searchBar' 
                type='text' 
                placeholder='type something' 
                onKeyDown={handleKeyDown}
            ></input>
            {/* <input type='submit' value='click me' class='arrow' alt='arrow'></input> */}
        </form>
    )
}

export default SearchBar