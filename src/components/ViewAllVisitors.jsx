import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllVisitors = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://35.170.103.9:4057/getvistors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whom to meet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value._id}</td>
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.purpose}</td>
                                                <td>{value.whomToMeet}</td>

                                            </tr>
                                        }
                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllVisitors
