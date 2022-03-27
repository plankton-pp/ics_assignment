import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
//style component
import { Card } from '../components/styles/globalStyles'

//demo data
import * as source from '../assets/demo_data/data'

function Detail() {
    const imgCardRef = React.createRef();
    const infoCardRef = React.createRef();
    const history = useHistory()
    const location = useLocation();
    const param = String(location.search).split('=');
    const id = param[1]
    const [data, setData] = useState(source.demodata[id])
    const [checkBoxValue, setCheckBoxValue] = useState(false)

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    useEffect(() => {
        checkRender()
    }, [width, checkBoxValue])


    const checkRender = () => {
        let info = infoCardRef.current
        let img = imgCardRef.current
        //check screen width
        if (width <= 768) {
            if (checkBoxValue) {
                info.style.display = 'none'
                img.style.display = 'block'
            } else {
                info.style.display = 'block'
                img.style.display = 'none'
            }
        } else {
            info.style.display = 'block'
            img.style.display = 'block'
        }
    }
    const renderOpeningTime = (item, index) => {
        let day = item.day + ' '
        let open = item.time_open.includes('closed') ? item.time_open : (item.time_open + ' AM - ')
        let close = item.time_open.includes('closed') ? '' : (item.time_close + ' PM')
        let date = day + open + close
        return (<div key={index}><h6>{date}</h6></div>)
    }
    return (
        <div className='container'>
            <div className='btn-back mt-5 btn' onClick={() => { history.goBack() }}>
                <div className='btn-text'>
                    {"< Back"}
                </div>
            </div>
            <div className='toggle-switch'>
                <label className="switch mt-3">
                    <input type="checkbox" onChange={() => { setCheckBoxValue(!checkBoxValue) }} />
                    <span className="slider round ">
                        <div className='d-flex justify-content-around btn'>
                            <div className='text-info-btn'>INFORMATION</div>
                            <div className='text-img-btn'>IMAGE</div>
                        </div>
                    </span>
                </label>
            </div>
            <Card className='curved d-flex justify-content-center py-5 mt-3 bg-card' width='100%' height='100%' bg='#C4D3E9' dishover={true}>
                <Card className='curved card-info' ref={infoCardRef} width='55%' height='100%'>
                    <div className='place-profile-detail'>
                        <img className='curved place-profile-detail' src={data.profile_image_url} alt="place-profile" />
                    </div>
                    <div className='m-4'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex bold'><h4>{data.name}</h4></div>
                            <div className='d-flex'>
                                <div className='circle circle-point'></div>
                                <h6 className='h-blue number-point'>
                                    {Number(data.rating).toFixed(1)}
                                </h6>
                            </div>
                        </div>
                        <div className='row mb-3' key={1}>
                            <div className='col-sm-5 bold' key={11}>{'Address:'}</div>
                            <div className='col-sm-5 work-address' key={12}>{data.address}</div>
                        </div>
                        <div className='row' key={2}>
                            <div className='col-sm-5 bold' key={21}>{'Opening Hour:'}</div>
                            <div className='col-sm-5 work-time' key={22}>{data.operation_time.map((item, index) => { return renderOpeningTime(item, index) })}</div>
                        </div>
                    </div>
                </Card>
                <Card className='curved card-img' ref={imgCardRef} width='40%' height='870px'>
                    <div className='mt-3 mx-4 text-img'><h5>Images</h5></div>
                    <div className='d-block mt-4 mx-4'>
                        <img className='img-detail curved-up' src={data.images[0]} alt="food1" />
                        <img className='img-detail ' src={data.images[1]} alt="food2" />
                        <img className='img-detail curved-down' src={data.images[2]} alt="food3" />
                    </div>
                </Card>
            </Card>
        </div>
    )
}

export default Detail