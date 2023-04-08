import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data"

export default function App() {
    const cards  = data.map(item=> {
        return (
            <Card 
                item={item}
            />
        )
    })

    return(
        <div className="container">
            <Navbar/>
            {cards}
        </div>
    )
}