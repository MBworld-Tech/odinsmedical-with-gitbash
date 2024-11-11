import { Space } from 'antd'
import "../dashboard.css"
import AppHeader from '../../components/DashHeader'
import SideMenu from '../../components/DSideMenu'
import PageContent from '../../components/DPageContent'
import AppFooter from '../../components/DashFooter'

const clientDashboard = () => {
  return (
    <div className='Dash'>
       <AppHeader/>
       <Space>
          <SideMenu></SideMenu>
          <PageContent></PageContent>
       </Space>
       <AppFooter/>
    </div>
  )
}

export default clientDashboard