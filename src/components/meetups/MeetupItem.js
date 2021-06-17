import classes from './MeetupItem.module.css';

function MeetupItem () {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                <img src={} alt={} />
                </div>
                <div className={classes.content}>
                <h3></h3>
                <address></address>
                <p></p>
                </div>
                <div className={classes.actions}>
                <button>
                    Add
                </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;