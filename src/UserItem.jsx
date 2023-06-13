import React from 'react'

export default function UserItem({ item, index, handleClick, }) {

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.text}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
            <td>{item.name}</td>
            <td>
                <button className="upDate">Update</button>
                <button className="delete" onClick={() => { handleClick(item.id) }}>Delete</button>
            </td>
        </tr>

    )
}
