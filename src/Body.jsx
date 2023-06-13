import React, { useState } from 'react'
import UserItem from './UserItem'
export default function Body({ texts, handleClick }) {
    return (
        <div className='content'>
            <table>
                <tr>
                    <th>#</th>
                    <th>Content</th>
                    <th>Due date</th>
                    <th>Status</th>
                    <th>Assigned</th>
                    <th>Action</th>
                </tr>
                {texts.map((item, index) => (
                    <UserItem item={item} index={index} handleClick={handleClick} ></UserItem>
                ))}

            </table>
        </div>
    )
}
