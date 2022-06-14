import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

function Card({character}) {
  return (
    <div>
      <div className="card">
        <img src={character.img} alt={character.name} />
        <div className="info">
        <h6><FontAwesomeIcon icon={faUserGroup} /> {character.team}</h6>
        <h2>{character.name}</h2>
        <h3>First Appearance:</h3>
        <h5>{character.firstAppearance}</h5>
        <p>{character.about}</p>
      </div>
      </div>
      
    </div>
  )
}

export default Card;