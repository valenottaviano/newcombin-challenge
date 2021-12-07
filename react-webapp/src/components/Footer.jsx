import { Fragment } from "react";

export default function Footer(props){
    return <Fragment>
        <footer>
            <div className="footer-container">
                <p>Copyright &copy; 2021 New Combin.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
        <style jsx="true">{`
        footer{
            background: rgb(64, 61, 242);
            width: 100%;
            margin: auto;
            color: white;
        }
        .footer-container{
            min-height: 15vh;
            width: 80%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        `}</style>
    </Fragment>
}