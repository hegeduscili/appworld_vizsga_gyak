import React, { useState } from 'react'

const Header = () => {
    return (
        <header>
            <h2>Cities</h2>
        </header>
    )
}

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">London</a></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">Tokyo</a></li>
            </ul>
        </nav>
    )
}

const Article = () => {

    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(false)


    const Counter = () => {
        return (

            <>
                <h1>Counter</h1>
                <h3>{number}</h3>
                <button onClick={function () {
                    setNumber(number + 1)
                }}>+</button>
                <button onClick={function () {
                    setNumber(number - 1)
                }}>-</button>
            </>

        )
    }

    return (
        <article>
            {show ? <Counter /> : null}
            <button onClick={function () {
                setShow(!show)
            }}
            >Toggle button</button>
        </article>
    )


}



const Article2 = () => {

    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(true)

    const Counter = () => {
        return (
            <>
                <h2>Counter</h2>
                <h3>{number}</h3>
                <button onClick={function(){setNumber(number+1)}}>+</button>
                <button onClick={function(){setNumber(number-1)}}>-</button>

            </>
        )
    }

    return(
        <article>
            {show ? <Counter /> : null}

            <button onClick={function(){setShow(!show)}}>Toggle Button</button>
        </article>
    )

}


const Footer = () => {
    return (
        <footer>
            <p>Footer</p>
        </footer>
    )
}

export { Header, Nav, Article, Footer, Article2 };

