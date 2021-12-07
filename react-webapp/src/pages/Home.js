import { Fragment, useState, useEffect } from "react";
import FormComponent from "../components/FormComponent";
import MembersList from "../components/MembersList";
import NavBar from "../components/NavBar";
import axios from 'axios'
import Footer from "../components/Footer";

export default function Home(props){
    const [members, setMembers] = useState([])

    const updateList = async ()=>{
        const res = await axios.get('http://localhost:8081/api/members')
        setMembers(res.data)
    }

    useEffect(()=>{
        updateList()
    },[])

    return <Fragment>
        <NavBar/>
        <section id="home">
            <FormComponent updateList={updateList} members={members}/>
            <MembersList members={members}/>
        </section>
        <Footer/>
        <style jsx="true">{`
            #home{
                min-height: 90vh;
                width: 80%;
                margin: auto;
                display:flex;
                align-items:center;
                justify-content: space-between;
            }
            @media (max-width: 1500px){
                #home{
                    width: 90%;
                }
            }
            @media (max-width: 1000px){
                #home{
                    flex-direction: column;
                }
            }

            
        `}</style>
    </Fragment>
}