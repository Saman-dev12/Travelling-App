import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed: 1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          sliesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          sliesToScroll: 1,
        },
      },
    ]
  }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Saman chakki</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Irtiqaa </h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Manjay Patel</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Sidharth Sharma</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Gyanu Kumar</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nisi debitis labore, officia dolores ex beatae nemo exercitationem doloremque quos, soluta voluptatibus illum eum harum saepe. Numquam, fuga. Voluptate, obcaecati?</p>

        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>Tanishna Mishra</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial
