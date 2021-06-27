import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const settings = {
        withCredentials: true,
        headers: {
            'API-KEY': '1cdd9f77-c60e-4af5-xxx-xxxxxxx'
        }
    }
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "REACT"}, {
            withCredentials: true,
            headers: {
                'API-KEY': '1cdd9f77-c60e-4af5-xxx-xxxxxxx'
            }
        })
        promise.then((res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

