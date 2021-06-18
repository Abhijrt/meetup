import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavouriteContext from '../../store/favourites-context';

function MeetupItem (props) {

    const favouriteCtx = useContext(FavouriteContext);

    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

    function toggleFavouriteHandler () {
        if(itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                <button onClick={toggleFavouriteHandler}>
                   {itemIsFavourite ? 'Remove From Favourite' : 'Add to Favourite'}
                </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;