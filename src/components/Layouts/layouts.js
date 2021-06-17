import classes from './Layout.module.css'

function Layouts (props) {
    return <main className={classes.main}>
        {props.children}
    </main> 
}

export default Layouts;