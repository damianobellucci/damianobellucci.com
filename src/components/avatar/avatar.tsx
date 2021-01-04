import React from "react"
import avatarStyles from "./avatar.module.css"

interface props {
  srcAvatar: string
}

export default function Avatar(props: props): JSX.Element {
  return <img src={props.srcAvatar} className={avatarStyles.avatar}></img>
}
