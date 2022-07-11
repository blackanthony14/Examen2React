import React from 'react'
import './Styles.css'

const Heroes = ({ theHero = [] }) => {
  const str = theHero[1].url
  console.log(str)
  return (
    <div className=''>
      <div className=''>
        <div className="contenedor">
          <div className="Info">
            <div className="Info2">
              <h5 className="Nombre">Nombre: {theHero[0]}</h5>
              <p className="Otros"><p>La publicadora es : {theHero[2]}</p>De que lado esta : {theHero[3]}</p>
              <p className='Stats'>
                <p>
                  Combat: {theHero[4].combat}
                </p>
                <p>
                  Durability : {theHero[4].combat}
                </p>
                <p>
                  Intelligence Power: {theHero[4].combat}
                </p>
                <p>
                  Power: {theHero[4].combat}
                </p>
                <p>
                  Speed: {theHero[4].combat}
                </p>
                <p >
                  Strength: {theHero[4].combat}
                </p>
              </p>
              <div className= 'Datos'>
                <p>
                </p>
              </div>
            </div>
          </div>
          <div className="Img">
            <img src={str} className="Img" alt={str}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroes