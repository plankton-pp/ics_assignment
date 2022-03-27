import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

//style component
import { Card} from '../components/styles/globalStyles'

//component
import InputText from '../components/InputText'
import InputSelect from '../components/InputSelect'

//asset
import calendar from '../assets/svg/calendar.svg'
import nextbtn from '../assets/svg/next-btn.svg'
import prevbtn from '../assets/svg/prev-btn.svg'

//demo data
import * as source from '../assets/demo_data/data'

function Index() {
    const history = useHistory();
    const [data, setData] = useState(source.demodata)
    const limitPage = 9
    const initForm = {
        search: '',
        type: { value: 0, label: 'All' },
    }
    const [form, setForm] = useState(initForm)
    const [pageID, setPageID] = useState(1)
    const initTypeList = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Restaurant' },
        { value: 2, label: 'Bakery' },
        { value: 3, label: 'Cafe' }

    ]
    const [typeOptionList, setTypeOptionList] = useState(initTypeList)

    useEffect(() => {
        setPageID(1)
        if (form.search.length > 0) {
            filterData()
        } else {
            if (!form.type.label.includes('All')) {
                filterData()
            } else {
                setData(source.demodata)
            }

        }
    }, [form.search, form.type])


    const filterData = () => {
        let filteredData = source.demodata.filter((item) => {
            let checkSearch = String(item.name).toLocaleLowerCase().includes(String(form.search).toLocaleLowerCase())
            let checkType = form.type.label.includes('All') ? true : item.categories.includes(String(form.type.label).toLocaleLowerCase())
            return checkSearch && checkType
        })
        setData(filteredData)
    }

    const renderPlace = (item, index) => {
        return (
            <div className="col-sm-4 mt-3" key={index} onClick={() => { history.push(`/detail?id=${index}`); }}>
                <Card className='card' radius='10px' height='225px' width='400px'>
                    <div className='py-3 px-3 card-content'>
                        <div className='d-flex mb-2 place-detail'>
                            <div className=''>
                                <img className='curved place-profile' width="60px" height="60px" src={item.profile_image_url} alt="place-profile" />
                            </div>
                            <div className='px-3 w-100 operation-time'>
                                <h5>{item.name}</h5>
                                <div className='d-flex w-100 justify-content-between'>
                                    <div className='d-flex justify-content-center time'>
                                        <img
                                            src={calendar}
                                            alt="calendar"
                                            width={'20px'}
                                            style={{ paddingBottom: '10px' }}
                                        />
                                        <h6>
                                            {
                                                item.operation_time[0].time_open + ' AM - ' +
                                                item.operation_time[0].time_close + ' PM'
                                            }
                                        </h6>
                                    </div>
                                    <div className='point'>
                                        <div className='circle circle-point'></div>
                                        <h6 className='h-blue number-point'>
                                            {Number(item.rating).toFixed(1)}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img className='img image1 curved-left' src={item.images[0]} alt="food1" />
                            <img className='img image2' src={item.images[1]} alt="food2" />
                            <img className='img image3 curved-right' src={item.images[2]} alt="food3" />
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mt-3 mb-3 under-nav'>
                <div>
                    <h3><b>Place List</b></h3>
                </div>
                <div className='d-flex input-box'>
                    <div className="select-type" style={{ width: '185px' }}>
                        <InputSelect
                            idName="type"
                            star={true} classFormGroup="w-100"
                            optionsList={typeOptionList}
                            selectValue={form.type}
                            handleChange={(value) => {
                                setForm({ ...form, type: value })
                            }}
                        />
                    </div>
                    <div className='vl'></div>
                    <div className="search" style={{ width: '400px' }}>
                        <InputText
                            type="text" idName="search" value={form.search} star={false} classFormGroup="w-100"
                            placeholder="Search name..."
                            handleChange={(value) => setForm({ ...form, search: value })}
                            style={{ borderRadius: '50px', borderColor: '#134B8A' }}
                        />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="row">
                    {
                        data.length > 0 ? data.map((item, index) => {
                            if (((pageID - 1) * limitPage <= index) && (index < pageID * limitPage)) {
                                return renderPlace(item, index)
                            }
                        })
                            :
                            <div className='d-flex justify-content-center' style={{ height: '500px', marginTop: '200px' }}>
                                <h5> ไม่มีข้อมูล</h5>
                            </div>
                    }
                </div>
                <div className='d-flex justify-content-center mt-2 pagination-group'>
                    <div className='btn btn-prev' onClick={() => { setPageID(pageID === 1 ? 1 : pageID - 1) }}>
                        <img
                            src={prevbtn}
                            alt="prevbtn"
                            width={'50px'}
                        />
                    </div>
                    <div className='circle d-flex justify-content-center mx-3 mt-2' style={{ height: '49px', width: '49px', marginTop: '0px', marginRight: '0px' }}>
                        <h3 className='mt-2' style={{ color: '#fff' }}>{pageID}</h3>
                    </div>
                    <div className='btn btn-next' onClick={() => { setPageID(limitPage * pageID < data.length ? pageID + 1 : pageID) }}>
                        <img
                            src={nextbtn}
                            alt="nextbtn"
                            width={'50px'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
