import { createContext, useState } from 'react';


const FavouriteContext = createContext({
    favourites: [],
    totalFavouritesCount: 0,
    addFavourite: (meetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});


export function FavouriteContextProvider (props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouritesHandler (meetup) {
        console.log("ADDING")
        setUserFavourites((prevFavourites) => {
            return prevFavourites.concat(meetup);
        })
    }

    function removeFavouritesHandler (meetupId) {
        setUserFavourites((prevFavourites) => {
            return prevFavourites.filter(meetup => meetup.id !== meetupId );
        })
    }

    function checkIsFavourites (meetupId) {
        console.log("CHECKUING")
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavouritesCount: userFavourites.length,
        addFavourite: addFavouritesHandler,
        removeFavourite: removeFavouritesHandler,
        itemIsFavourite: checkIsFavourites
    };

    return (
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContext;