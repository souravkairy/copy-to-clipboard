import React from 'react'
import ClipBoard from './component/copy-to-clipboard/CopyToClipboard'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <ClipBoard value="Sourav">
        Copy to Sourav
      </ClipBoard>
    </div>


  )
}

export default App