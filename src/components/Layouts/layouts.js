import classes from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layouts (props) {
    return  <div>
        <MainNavigation/>
        <main className={classes.main}>
            {props.children}
        </main> 
    </div>
    
}

export default Layouts;