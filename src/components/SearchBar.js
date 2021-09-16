// import arrow from '../images/icon-arrow.svg'
import Button from './Button'


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
        
    }

    const handleSubmit = (e) => {
        if (inputText) {
          setipAddress(inputText);
        }
        e.preventDefault()
    }
        
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={inputTextHandler}
                class='searchBar' 
                type='text' 
                placeholder='' 
                // value={inputText} 
                
            ></input>
            <Button />
        </form>
    )
}

export default SearchBar