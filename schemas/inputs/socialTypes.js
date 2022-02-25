import React from 'react'
import Icon from '../../components/emojiIcon'

export default [
  {title: 'email', value: 'email', icon: () => <Icon emoji="＠" />},
  {title: 'phone', value: 'phone', icon: () => <Icon emoji="📞" />},
  {title: 'twitter', value: 'phone', icon: () => <Icon emoji="🐤" />},
  {title: 'instagram', value: 'phone', icon: () => <Icon emoji="🤳" />},
  {title: 'facebook', value: 'phone', icon: () => <Icon emoji="👍" />},
  {title: 'github', value: 'phone', icon: () => <Icon emoji="🧑🏻‍💻" />},
  {title: 'other', value: 'phone', icon: () => <Icon emoji="👤" />},
]