import { useEffect } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'

 export default function Modal({theme,children,title,isOpen,setIsOpen}) {
    useEffect(() => {
        const handleClick = (e) => {
            const {className} = e.target;
            if(className==="Modal") {
                setIsOpen(false)
            }
        }
        window.addEventListener("click",handleClick)
        return () => {
            window.removeEventListener('click',handleClick)
        }
    },[])

  return (
    <>
        {
            isOpen ? (
                <div className="Modal">
                    <div className={`Modal__content Modal__content-${theme}`} >
                        <h2>{title}</h2>
                        {children}
                    </div>
                </div>
            ): null
        }
    </>
  )
}

Modal.defaultProps = {
    theme: "light",
}
Modal.propTypes = {
    theme: PropTypes.oneOf(['light','dark']),

    children:PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ]),
    title:PropTypes.string,
}
