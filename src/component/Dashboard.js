import React from 'react'
import './Dashboard.css'
import DashboardCard from './mini-components/DashboardCard'

const Dashboard = () => {
   const title = ['Confirmed Cases','Total Recovered','Total Death'];
   const number = ['31,67,323','7,04,348','24,04,585']
   return (
      <div className='dashboard-container row'>
         <div className='col-lg-3 col-md-2 col-sm-12'>
            <p className='dashboard-heading'>Worldwide Update</p>
         </div>
         <div className='col-lg col-md col-sm-12 dashboard-dock'>
         <DashboardCard title={title[0]} number={number[0]}/>
         <DashboardCard title={title[1]} number={number[1]}/>
         <DashboardCard title={title[2]} number={number[2]}/>
         </div>
      </div>
   )
}
export default Dashboard
