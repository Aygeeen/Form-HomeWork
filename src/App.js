import React from "react";
import {useState} from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        FullName: '',
        phoneNumber: '',
        email: ''
    })
    const [submittedData, setSubmittedData] = useState(null)

    const formChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const formSubmit = (e) => {
        e.preventDefault()
        setSubmittedData(formData)
        setFormData({
            FullName: '',
            phoneNumber: '',
            email: ''
        })
    }
    return (
        <div className="registration-form">
            <h2>Регистрация</h2>
            <form onSubmit={formSubmit}>
                <div className="form">
                    <label htmlFor="FullName">ФИО:</label>
                    <input type="text"
                           name="FullName"
                           id="FullName"
                           value={formData.FullName}
                           onChange={formChange}/>
                </div>
                <div className="form">
                    <label htmlFor="phoneNumber">Номер телефона:</label>
                    <input type="number"
                           name="phoneNumber"
                           id="phoneNumber"
                           value={formData.phoneNumber}
                           onChange={formChange}/>
                </div>
                <div className="form">
                    <label htmlFor="email">Ваш Email:</label>
                    <input type="text"
                           name="email"
                           id="email"
                           value={formData.email}
                           onChange={formChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h3>Введенные данные</h3>
                    <p>ФИО: {submittedData.FullName}</p>
                    <p>Номер телефона: {submittedData.phoneNumber}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    )
}