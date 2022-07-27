
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
  getAnnouncement,
  getError,
  deleteAnnouncement,
  deleteError,
} from './../store/actions'
import axios from 'axios';
import Cards from './Cards';

interface IAlertData {
  id: string;
  createdOn: string;
  title: string;
}
const CardMessages = (props: any) => {
  const dispatch = useDispatch();
  const alert = useSelector((state: any) => state.alert);


  const getData = async (path: string, type: string) => {
    const res = await axios
      .get(path)
      .catch((err) => {
        console.log("Err", err);
      })
      .then((res) => {
        return res?.data;
      });

    type === "announcements"
      ? dispatch(getAnnouncement(res))
      : dispatch(getError(res));
  };

  useEffect(() => {
    getData("http://localhost:3000/announcements", "announcements");
    getData("http://localhost:3000/errors", "error");
  }, [])

  const newAnnouncements = alert.announcement.map((announcement: any) => {
    return { ...announcement, category: "success" }
  })


  const newErrors = alert.error.map((error: any) => {
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
    category === "success" ? dispatch(deleteAnnouncement(id)) : category === "error" && dispatch(deleteError(id))
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
      handleOnClick={() => handleOnClick(alert.id, alert.category)}
    />
  })



  return (
    <div>
      {alerts}
    </div>
  )


}

export default CardMessages