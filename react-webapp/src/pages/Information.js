import NavBar from "../components/NavBar";
import { Fragment } from "react";
import Footer from "../components/Footer";

export default function Home(props){
    
    return <Fragment>
        <NavBar/>
        <section id="information">
            <h3>This a project based on a selection challenge for New Combin</h3>
            <a href="#">Source Code</a>
        </section>
        <Footer/>
        <style jsx="true">{`
            #information{
                min-height: 90vh;
                width: 80%;
                margin: auto;
                display:flex;
                flex-direction: column;
                align-items:center;
                justify-content: center;
            }
            #information a{
                cursor: pointer;
                padding: 0.5rem 1.2rem;
                margin-top: 2rem;
                border: none;
                border-radius: 10px;
                font-weight: 500;
                background: rgb(64, 61, 242);
                color: white;
                font-size: 0.8rem;
                box-shadow: 2px 2px 5px rgba(64, 61, 242, 0.5);
                -webkit-box-shadow:: 2px 2px 5px rgba(64, 61, 242, 0.5);
                -moz-box-shadow: 2px 2px 5px rgba(64, 61, 242, 0.5);
            }
            @media (max-width: 1500px){
                #home{
                    width: 90%;
                }
            }
            
        `}</style>
    </Fragment>
}