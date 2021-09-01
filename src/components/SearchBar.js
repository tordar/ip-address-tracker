import arrow from '../images/icon-arrow.svg'

export const SearchBar = () => {
    return (
        <div>
            <input class='searchBar' type='text' placeholder='Search for any IP address or domain'></input>
            <img src={arrow} class='arrow' alt='arrow'></img>
        </div>
    )
}

export default SearchBar