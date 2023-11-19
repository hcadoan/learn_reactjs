import clsx from 'clsx'
import styles from './button.module.scss'

export default function Button({ primary }) {

    const classes = clsx(styles.btn, {
        [styles.primary]: primary
    })

    return (
        <button className={classes} >click me!</button>
    )
}