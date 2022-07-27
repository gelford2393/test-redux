
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAnnouncements } from '../store/action/announcementActions';
import { getErrors } from '../store/action/errorsActions';
import { deleteError } from '../store/action/errorsDeleteAction';
import { deleteAnnouncement } from '../store/action/announcementDeleteActions';
// import axios from 'axios';
import Cards from './Cards';


const CardMessages = (props: any) => {
  // const [alertId, setAlertId] = useState()
  useEffect(() => {
    props.getAnnouncements()
    props.getErrors()

  }, [])
  const { announcements } = props.announcements
  const { errors } = props.errors
  const newAnnouncements = announcements.map((announcement: any) => {
    return { ...announcement, category: "success" }
  })
  const newErrors = errors.map((error: any) => {
    return { ...error, category: "error" }
  })
  const newAlerts = [...newAnnouncements, ...newErrors]
  const formatDate = (date: any) => {
    const calcDaysPassed = (date1: any, date2: any) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    const daysPassed = calcDaysPassed(new Date(), new Date(date));


    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed >= 7) return `${daysPassed} days ago`;

  }
  
  const handleOnClick = (id: any, category: string) => {
    if (category === "success") {
      props.deleteAnnouncement(id);
    } else if (category === "error") {
      props.deleteError(id);
    }
  }
    
  
  const alerts = newAlerts.slice().sort((a: any, b: any) => {
    const dateA: any = new Date(a.createdOn)
    const dateB: any = new Date(b.createdOn)
    return dateA - dateB
  }).map((alert: any, i: number) => {
    return <Cards
      title={alert.title}
      category={alert.category}
      createdOn={formatDate(alert.createdOn)}
      id={alert.id}
      i={i}
      handleOnClick={handleOnClick}
    />
  })



  return (
    <div>
      {alerts}
    </div>
  )


}

const mapStateToProps = (state: { announcements: any, errors: any }) => ({ announcements: state.announcements, errors: state.errors })
export default connect(mapStateToProps, { getAnnouncements, getErrors, deleteAnnouncement, deleteError })(CardMessages)