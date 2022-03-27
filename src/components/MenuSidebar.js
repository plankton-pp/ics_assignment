import React from 'react'

//image
import logo from '../assets/svg/logo.svg'
import list from '../assets/svg/list.svg'

function MenuSideBar() {
    return (
        <div>
            <div>
                <img
                    className='image-logo'
                    src={logo}
                    alt="logo"
                    width={'100%'}
                    style={{ borderRadius: '0px 50px 0px 0px' }}
                />
            </div>
            <div className='hl'></div>
            <div className='d-flex justify-content-center my-2'>
                <div className='square-box'>
                    <img
                        src={list}
                        alt="list"
                        width={'100%'}
                        style={{ padding: '4px' }}
                    />
                </div>

            </div>
            <h6 className='d-flex justify-content-center'>Place</h6>
            <div className='hl'></div>
        </div>
    )
}

export default MenuSideBar