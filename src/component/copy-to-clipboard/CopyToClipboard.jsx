
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../button/Button';


const ClipBoard = ({ value, children }) => {
    const [message, setMessage] = useState('')
    const [button, setButton] = useState('')
    const handleHover = () => {
        setMessage('Click To Copy')
        setButton('content_copy')
    }
    const handleHoverLeave = () => {
        setTimeout(() => {
            setMessage('')
        }, 500);
    }
    const handleClick = () => {
        setMessage('Copied')
        setButton('check_circle')
    }
    return (
        <>
            <div className='flex flex-col relative justify-center items-center pl-2'>
                {
                    message &&
                    <div className='flex justify-center items-center absolute bottom-6 bg-gray-800 text-white text-xs rounded-lg transition duration-700 ease-in-out' style={{ width: '134px' }}>
                        <span>{message}</span>
                        <Button
                            icon={button}
                            variant="iconButton"
                            iconClass="text-sm text-white"
                        />
                    </div>
                }

                <CopyToClipboard text={value}>
                    <div className='' onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} >
                        <span className='cursor-pointer'>{children}</span>
                    </div>
                </CopyToClipboard>
            </div>
        </>
    )
}

export default ClipBoard