import { Link } from 'react-router-dom'
import './Portfolio.css'
import React from 'react'

const Portfolio = () => {
  return (
    <>
        <div className="parent-portfolio">
            <div className="top-portfolio">
                Portfolio
            </div>
            <div className="bottom-portfolio">
                <div className="bottom-left">
                    <div className="grid-bottom-left">
                        <div className="portfolio-grid-item">1</div>
                        <div className="portfolio-grid-item">2</div>
                        <div className="portfolio-grid-item">3</div>
                        <div className="portfolio-grid-item">4</div>
                        <div className="portfolio-grid-item">5</div>
                        <div className="portfolio-grid-item">6</div>
                        <div className="portfolio-grid-item">7</div>
                        <div className="portfolio-grid-item">8</div>
                        <div className="portfolio-grid-item">9</div>
                        <div className="portfolio-grid-item">10</div>
                        <div className="portfolio-grid-item">11</div>
                        <div className="portfolio-grid-item">12</div>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-item"><Link to="/about">About</Link></div>
                    <div className="bottom-right-item"><Link to="/contact">Contact</Link></div>
                    <div className="bottom-right-item"><Link to="/">Home</Link></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio