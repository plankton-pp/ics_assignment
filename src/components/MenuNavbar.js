import React from 'react'

//lib
import { Image } from 'antd';

//image
import bell from '../assets/svg/bell.svg'
import arrow from '../assets/svg/arrow-down.svg'
import logo from '../assets/svg/logo.svg'

function MenuNavbar() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <img
                    className='nav-logo'
                    src={logo}
                    alt="logo"
                />
                <div className='nav-profile'>
                    <Image
                        src='https://pbs.twimg.com/media/D8RZUYZV4AAFN2m.jpg'
                        alt="i here t... youu"
                        width={'40px'}
                        style={{ borderRadius: '50px' }}
                    />
                </div>
            </div>
            <div className='d-flex justify-content-end px-5 nav-detail'>
                <div className='my-2 mx-4'>
                    <img
                        src={bell}
                        alt="bell"
                        width={'100%'}
                        style={{ padding: '4px' }}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='my-1'>
                        <Image
                            src='https://pbs.twimg.com/media/D8RZUYZV4AAFN2m.jpg'
                            alt="i here t... youu"
                            width={'40px'}
                            style={{ borderRadius: '50px' }}
                        />
                    </div>
                    <div className='mt-2 mx-4 py-1 profile'>
                        <h5 style={{ color: '#fff' }}>
                            {'Pra..chachon'}
                        </h5>
                    </div>
                    <div className='mt-2 py-1'>
                        <img
                            src={arrow}
                            alt="arrow"
                            width={'16px'}
                            style={{ borderRadius: '50px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuNavbar