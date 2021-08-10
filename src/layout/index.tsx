import React from 'react'
import { UserStore } from "../store/userStore"
import './index.less'
interface LayoutProps {
    children: JSX.Element;
}
function Layout(props: LayoutProps) {
    return <div>{
        props.children}
    </div>
}

export default (props: LayoutProps) => <UserStore.Provider><Layout {...props}></Layout></UserStore.Provider>;