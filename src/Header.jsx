import React, { useState } from 'react'

export default function Header({ handleUser }) {
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    };

    return (
        <div className='header'>
            <input placeholder='Content...' type='text' value={text} onChange={(e) => { setText(e.target.value) }} />
            <input type='date' value={date} onChange={(e) => { setDate(e.target.value) }} />
            <select>
                <option value="">Choose...</option>
                <option value="Fulfill">Fulfill</option>
                <option value="Pending">Pending</option>
                <option value="Reject">Reject</option>
            </select>
            <input placeholder='Name...' type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button className='sumit'
                onClick={() => {
                    if (document.querySelector("select").value !== "" && text !== "" && date !== "" && name !== "") {
                        handleUser({ id: uuidv4(), text: text, name: name, date: date, status: document.querySelector("select").value })
                        setName('')
                        setDate('')
                        setText('')
                    } else {
                        alert("Please choose your option!");
                    }
                }} >
                Submit
            </button>
        </div>
    )
}
