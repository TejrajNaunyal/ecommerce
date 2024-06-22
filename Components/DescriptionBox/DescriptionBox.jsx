import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigation">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Discover the best in fashion with our e-commerce website, offering a curated selection of high-quality clothing, accessories, and more. Enjoy seamless shopping, exclusive deals, and fast delivery. Elevate your style effortlessly with just a few clicks.</p>
        </div>
    </div>
  )
}

export default DescriptionBox