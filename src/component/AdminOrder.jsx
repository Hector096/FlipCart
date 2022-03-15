import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    Table, Button, Modal
  } from 'antd';
  import { setMessage } from '../redux/action/message';

export default function AdminOrder() {

    const { message } = useSelector(state => state.message);
    const { user: currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const columns = [
        {
          title: 'Patient Name',
          render: (record)=> (`${record.patient.firstName} ${record.patient.lastName ? record.patient.lastName : ""}`)
        },
        {
          title: 'Doctor Name',
          render: (record)=> record.user.name
        },
        {
          title: 'Date and Time',
          dataIndex: 'scheduleDateTime',
          sorter: {
            compare: (a, b) => moment(a.scheduleDateTime) - moment(b.scheduleDateTime),
          },
          render: scheduleDateTime => (<>{moment(scheduleDateTime.split(" ")[0] + "T" + scheduleDateTime.split(" ")[1]+"Z").toLocaleString().substring(0,24)}</>),
        },
        {
          title: 'Appointment Type',
          dataIndex: 'appointmentType',
        },
        {
          title: 'Patient Status',
          dataIndex: 'patientStatus',
        }
      ];

    useEffect(() => {
        if (currentUser.admin) {
            if (orders === 0) {
              setLoading(true);
              dispatch(getDoctors())
                .then(() => { 
                  setLoadingDoctors(false);
                })
                .catch((err) => {
                  dispatch(setMessage('Unable to get order list'));
                });
            }
        }
      }, []);
  return (
    <>

{message && (
      <div className="form-group">
        <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
          {message}
        </div>
      </div>
      )}
      <Modal
        title="Are you sure?"
        centered
        onCancel={() => setConfirm(false)}
        visible={confirm}
        footer={[
            <Button key="back1" type="danger" disabled={deleteLoading} onClick={()=>onSelectChange(modalData)}>
              {deleteLoading && (
              <span className="spinner-border spinner-border-sm" />
            )}
            <span> Yes</span>
            </Button>,
              <Button key="back" onClick={()=>setConfirm(false)}>
              No
            </Button>,
          ]}
      />
    <Table
        hideDefaultSelections
        className="border"
        columns={columns}
        dataSource={content}
        pagination={{ defaultPageSize: 6 }}
      />
    </>
  )
}
