import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlaystation,
  faWindows,
  faApple,
  faXbox,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'

const PlatformIcon = ({ platform }) => {
  const [gamePlatform, setGamePlatform] = useState('')

  const getPlatform = (currentPlatform) => {
    switch (currentPlatform.platform.name) {
      case 'PC':
        return (
          <FontAwesomeIcon icon={faWindows} key={currentPlatform.platform.id} />
        )
        break
      case 'PlayStation 5' || 'PlayStation 4' || 'PlayStation 3':
        return (
          <FontAwesomeIcon
            icon={faPlaystation}
            key={currentPlatform.platform.id}
          />
        )
        break
      case 'Xbox One' || 'Xbox 360' || 'Xbox Series S/X':
        return (
          <FontAwesomeIcon icon={faXbox} key={currentPlatform.platform.id} />
        )
        break
      case 'macOS':
        return (
          <FontAwesomeIcon icon={faApple} key={currentPlatform.platform.id} />
        )
        break
      case 'Linux':
        return (
          <FontAwesomeIcon icon={faLinux} key={currentPlatform.platform.id} />
        )
        break

      default:
        break
    }
  }
  return (
    <div className='flex gap-2'>
      {platform.map((plat) => getPlatform(plat))}
    </div>
  )
}

export default PlatformIcon
