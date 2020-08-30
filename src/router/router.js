import React from 'react'
import Index from '../view/index/index'
import Course from '../view/course/index'
import Work from '../view/work/index'
import Teacher from '../view/teacher/index'
import Login from '../view/login/index'

const router = [
  {
    name: '首页',
    path: '/',
    exact: true, // 是否精确匹配
    render(props) {
      return <Index {...props}/>
    }
  },
  {
    name: '课程安排',
    path: '/course',
    exact: true, // 是否精确匹配
    render(props) {
      return <Course {...props}/>
    }
  },
  {
    name: '作品',
    path: '/work',
    exact: true, // 是否精确匹配
    render(props) {
      return <Work {...props}/>
    }
  },
  {
    name: '讲师',
    path: '/teacher',
    exact: true, // 是否精确匹配
    render(props) {
      return <Teacher {...props}/>
    }
  },
  {
    name: '登录',
    path: '/login',
    exact: true, // 是否精确匹配
    render(props) {
      return <Login {...props}/>
    }
  }
]

export default router