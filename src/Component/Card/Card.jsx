import React from 'react'
import './Card.scss'

const Card = ({ item }) => {
	const {title , body, author} = item
	return (
		<div className='card-block'>
            <div className="card-block__title">{title}</div>
            <div className="card-block__descr">{body}</div>
            <div className="card-block__author">{author}</div>
		</div>
	)
}

export default Card