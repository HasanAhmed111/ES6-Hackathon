import React from 'react'
import { Navbar_Component } from '../components/Navbar_Component'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Donor = () => {
  return (
    <>
    <Navbar_Component/>
    <h1 className='text-8xl font-bold '>Welcome to Donor's Section</h1>
<div className='flex flex-wrap justify-between'>
<Link to={"/A+d"}><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-pos.png" alt="" width={"150px"} /></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-neg.png"alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeAB-pos.png" alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeAB-neg.png" alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeB-pos.png" alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeB-neg.png" alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeOpos.png" alt="" width={"150px"}/></Link>
<Link><img src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeOneg.png" alt="" width={"150px"}/></Link>
</div>

    </>
  )
}

export default Donor