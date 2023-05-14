import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import '../index.css'

const Home = () => {
    const [auth, setAuth] = useAuth()
    return (

        <Layout title={"ALl Products - Best offers "}>
            <h1>Home</h1>
            <h1>Home</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>


    )
}

export default Home