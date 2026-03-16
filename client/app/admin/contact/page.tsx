"use client"
import { useGetContactsQuery } from '@/redux/apis/admin.api'
import React from 'react'

const contact = () => {
    const { data } = useGetContactsQuery()
    return <>
        {
            data && <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>subject</th>
                        <th>message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>
                        </tr>)
                    }
                </tbody>
            </table >
        }
    </>
}

export default contact