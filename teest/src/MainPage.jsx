import React from 'react';
import './MainPage.css'

export default function MainPage() {
  return (
    <div className="mainPage">
        <div className="mainPage__notification">A new event was added!!!</div>
        <div className='main'>
            <div className='main__left'>
                <h1 className='main__title'>Club Des Affaires Sociaux </h1>
                <p className='main__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime? Obcaecati, nesciunt laborum magni maiores eum asperiores ex rem nisi dicta? Sit repellat consequatur ut sequi recusandae cupiditate, perspiciatis praesentium?
                </p>
            </div>
            <div className='main__right'>
                <img className='main__logo' src="src/assets/logo1.png" alt="Logo" />
                <img className='main__icon main__icon__books' src="src/assets/books.png" alt="Book" />
                <img className='main__icon main__icon__money' src="src/assets/money.png" alt="Money" />
                <img className='main__icon main__icon__clothes' src="src/assets/clothes.png" alt="Clothes" />
            </div>
        </div>
    </div>   
  )
}
