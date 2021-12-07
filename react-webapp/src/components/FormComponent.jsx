import { Fragment } from "react";
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function FormComponent({updateList, members}){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [ssn, setSsn] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const [isValidated, setIsValidated] = useState(false)

    useEffect(()=>{
     validateForm()
    },[firstName, lastName, address, ssn])

    const validateForm = ()=>{
        if(firstName.trim() == '' && lastName.trim() == '' && address.trim() == '' && ssn.trim() == ''){
            setIsValidated(false)
            return
        }
        if (firstName.trim().length <= 1 ){
            setErrMessage('First name field needs more than one character.')
            setIsValidated(false)
            return
        }
        if (lastName.trim().length <= 1 ){
            setErrMessage('Last name field needs more than one character.')
            setIsValidated(false)
            return
        }
        if (address.trim().length <= 1 ){
            setErrMessage('Address needs field more than one character.')
            setIsValidated(false)
            return
        }
        if(ssn.trim().length !== 11 || ssn.trim()[3] != '-' || ssn.trim()[6] != '-'){
            setErrMessage('Invalid SSN.')
            setIsValidated(false)
            return
        }
        for (let i=0; i< ssn.length; i++){
            if(i == 3 || i == 6){
                continue
            }
            if (isNaN(ssn[i])){
                setErrMessage('Invalid SSN.')
                setIsValidated(false)
                return
            }
        }
        if (members.find(memb => memb.ssn == ssn)){
            setErrMessage('SSN alrealdy exists.')
            setIsValidated(false)
            return
        }
        setErrMessage('')
        setIsValidated(true)
    }
    
    
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/api/members',{
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            address: address.trim(),
            ssn: ssn.trim()
        }).then(res=>{
            updateList()
        }).catch(err=>{
            console.log(err)
        })
        resetForm()
    }
    
    const resetForm = ()=>{
        setFirstName('')
        setLastName('')
        setAddress('')
        setSsn('')
        setErrMessage('')
        setIsValidated(false)
    }

    return <Fragment>
        <div className="form-container">
            <h2>Add a new member!</h2>
            <h4>Please consider formatting each field correctly.</h4>
            {errMessage !== '' ? <span>{errMessage}</span> : null}
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/> 
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e)=>{
                    setLastName(e.target.value)
                }}/> 
                <label>Address</label>
                <input type="text" value={address} onChange={(e)=>{
                    setAddress(e.target.value)
                }}/> 
                <label>SSN</label>
                <input type="text" value={ssn} onChange={(e)=>{
                    setSsn(e.target.value)
                }}/>
                <div className="btn-container">
                    <button
                     className={`${isValidated ? 'validated' : null}`} 
                     onClick={isValidated? handleFormSubmit : null}
                     >Send</button>
                    <button onClick={resetForm}>Reset</button>
                </div>
            </form>
        </div>
        <style jsx="true">{`
            .form-container{
                max-width: 35vw;
                min-width: 300px;
                padding: 2rem;
                background: white;
                border-radius: 10px;
                margin-right: 2rem;
                box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
                -webkit-box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
                -moz-box-shadow: 16px 15px 38px -27px rgba(63,66,80,0.6);
            }
            form{
                display: flex;
                flex-direction: column;
                margin-top: 1.3rem;
            }
            label{
                font-size: 0.8rem;
                color: rgba(0,0,0,0.8)
            }
            input{
                border: none;
                border-bottom: 1px solid rgba(0,0,0,0.3);
                padding: 0.5rem 1rem;
                margin-bottom: 1rem;
            }
            .btn-container{
                display: flex;
                flex-direction: row-reverse;
                flex: 1;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-top: 2rem;
            }
            .btn-container button:nth-child(2){
                cursor: pointer;
                padding: 0.5rem 0rem;
                background: none;
                border: none;
                font-weight: 500;
                color: rgba(0,0,0,0.8);
            }
            .btn-container button:nth-child(1){
                cursor: pointer;
                padding: 0.5rem 1.2rem;
                border: none;
                border-radius: 10px;
                font-weight: 500;
                background: rgba(0,0,0,0.1)
            }
            .btn-container button:nth-child(1).validated{
                background: rgb(64, 61, 242);
                color: white;
                box-shadow: 2px 2px 5px rgba(64, 61, 242, 0.5);
                -webkit-box-shadow:: 2px 2px 5px rgba(64, 61, 242, 0.5);
                -moz-box-shadow: 2px 2px 5px rgba(64, 61, 242, 0.5);
            }
            h2{
                font-size: 1.3rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }
            h4{
                font-size: 0.8rem;
                font-weight: 400;
                margin-bottom: 1.3rem;
                color: rgba(0,0,0,0.8)
            }
            span{
                margin-bottom: 1rem;
                color: red;
                font-size: 0.7rem;
            }
            @media (max-width: 1000px){
                .form-container{
                    margin-right: 0rem;
                    width: 90vw;
                    margin: 3rem 0rem;
                }
            }

        `}</style>
    </Fragment>
}