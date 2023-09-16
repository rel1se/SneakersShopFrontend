import React from "react";
import styles from './Card.module.css'
function Card({title, imageUrl, price, onPlus, onFavorite}){
    const [isAdded, setIsAdded] = React.useState(false)
    const onClickPlus = () => {
        onPlus({title, price, imageUrl})
        setIsAdded(!isAdded)
    }
    const [isLiked, setIsLiked] = React.useState(false)
    const onClickLike = () =>{
        onFavorite({title, price, imageUrl})
        setIsLiked(!isLiked)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickLike} src={isLiked ? '/img/liked.svg' : '/img/heart.svg'} alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <p>Цена: </p>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="Plus"/>
            </div>
        </div>
    );
}
export default Card;