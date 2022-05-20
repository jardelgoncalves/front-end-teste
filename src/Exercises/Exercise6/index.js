import React, { Fragment, useState } from 'react'
import 'h8k-components'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'
import { useSliderInterval } from './hooks/useSliderInterval'

const title = 'Catalog Viewer'


function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [catalogs] = useState([...catalogsList])
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideTimer, setSlideTimer] = useState(false)
  const [slideDuration] = useState(3000)

  const handleNext = () => {
    const lastButOne = catalogs.length - 1
    if (activeIndex === lastButOne) {
      setActiveIndex(0)
      return
    }
    setActiveIndex(oldValue => oldValue + 1)
  }

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(catalogs.length - 1)
      return
    }
    setActiveIndex(oldValue => oldValue - 1)
  }

  const handleCheck = (e) => {
    const { target: { checked }} = e
    setSlideTimer(checked)
  }

  useSliderInterval(handleNext, slideDuration, !!slideTimer)

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                aria-label='prev'
                onClick={handlePrev}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                onThumbClick={setActiveIndex}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                aria-label='next'
                onClick={handleNext}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
            checked={slideTimer}
            onChange={handleCheck}
          />
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App

