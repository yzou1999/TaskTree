import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <BsIcons.BsListTask />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <AiIcons.AiFillCalendar />,
        cName: 'nav-text'
    }
]