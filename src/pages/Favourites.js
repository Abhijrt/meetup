import { useContext } from 'react';
import FavouriteContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function Favourites () {

    const FavoutireCtx = useContext(FavouriteContext);

    let content ;

    if(FavoutireCtx.totalFavouritesCount === 0) {
        content = <p>You Don't Have any Favourite Meetup</p>
    }else{
        content = <MeetupList meetups={FavoutireCtx.favourites}/>
    }

    return <section>
        <h1>My favourite</h1>
        {content}
    </section>
}

export default Favourites;