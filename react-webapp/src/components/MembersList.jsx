import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function MembersList({members}){
    return <Fragment>
        <div className="members-list">
            <h2>List of members</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>SSN</th>
                    </tr>
                </thead>
                <tbody>
                {members.length > 0 ?
                members.map(member=>{
                        return <tr key={member.ssn}>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.address}</td>
                            <td>{member.ssn}</td>
                        </tr>
                    }): null}
                </tbody>
            </table>
        </div>
        <style jsx="true">{`
        .members-list{
            padding: 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
            -webkit-box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
            -moz-box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
        }
        table {
            border-collapse: separate;
            border-spacing: 3rem 0;
            text-align: left;
        }
        td {
            padding: 0.5rem 0;
        }
        th{
            font-size: 1.1rem;
            font-weight: 500;
        }
        tr{
            font-size: 0.9rem;
        }
        .members-list h2{
            text-align:center;
            margin-bottom: 2rem;
        }
        @media (max-width: 1000px){
            table {
                border-spacing: 1rem 0;
            }
            tr{
                font-size: 0.7rem;
            }
            .members-list{
                margin-bottom: 4rem;
            }
        }
        
        `}</style>
    </Fragment>
}