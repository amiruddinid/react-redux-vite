import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMobil, filterMobil, selectMobil } from '../../app/reducers/mobil/mobilSlice'
import { Card, Button } from 'react-bootstrap'

export default function List() {
  const firstLoad = useRef(true)
  const { data, loading } = useSelector(selectMobil)
  const [filter, setFilter] = useState({
    availableAt: ''
  })

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(getMobil())
    return () => {
        firstLoad.current = false
    }
  }, [])

  const handleChange = (e) => {
    setFilter({
        ...filter,
        [e.target.name]: e.target.value 
    })
  }

  const handleFilter = (e) => {
    e.preventDefault()

    dispatch(filterMobil(filter))
  }

  useEffect(() => {
    console.log(data)
  }, [data])
  
  return (
    <div>
        <form onSubmit={(e) => handleFilter(e)}>
            <input type="date" name="availableAt" onChange={(e) => handleChange(e)}/>
            <button type='submit'>Search</button>
        </form>
        { loading === 'loading' && <div>Loading...</div>}
        <div className="container">
            <div className="row">
                { data ? data.map((e, i) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)} />
                        <Card.Body>
                            <Card.Title>{e.model}</Card.Title>
                            <Card.Text>
                                {e.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
                : <div className='col-12'>No Data</div>}
            </div>
        </div>
    </div>
  )
}
