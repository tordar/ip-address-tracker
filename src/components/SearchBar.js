// import arrow from '../images/icon-arrow.svg'


export const SearchBar = ({
    ipAddress, 
    setipAddress,
    inputText,
    setInputText
    }) => {
    // let output = 0

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
        setipAddress(inputText)
        // console.log(ipAddress)
    }
    
    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault()
    //         inputTextHandler(e)
    //     }
    //   }
    return (
        <form>
            <input 
                class='searchBar' 
                type='text' 
                placeholder='' 
                value={inputText} 
                onChange={inputTextHandler} 
            ></input>
        </form>
    )
}

export default SearchBar