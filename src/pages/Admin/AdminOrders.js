import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'

const AdminOrders = () => {
    return (
        <Layout title={"Dashboard - Orders"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Orders</h1>
                        <div className="m-1 w-75">

                            <div className="mb-3">
                                <label className="btn btn-outline-secondary col-md-12">

                                </label>
                            </div>
                            <div className="mb-3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminOrders