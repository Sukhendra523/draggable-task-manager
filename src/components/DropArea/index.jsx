import React, { useState } from 'react'
import './styles.css'

const DropArea = ({ height, onDrop = () => { } }) => {
  const [showDropArea, setShowDropArea] = useState(false)

  const toggleDropArea = () => {
    setShowDropArea(!showDropArea);
  }

  return (
    <section
      className={`${showDropArea ? 'drop_area' : 'hide_drop_area'}`}
      onDragEnter={toggleDropArea}
      onDragLeave={toggleDropArea}
      onDrop={() => {
        onDrop();
        setShowDropArea(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();

      }}
      style={{ height }}
    >
      Drop Here
    </section>
  )
}

export default DropArea