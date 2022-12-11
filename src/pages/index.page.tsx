import MainLayout from 'common/components/layout/MainLayout'
import { NextPageWithLayout } from 'libs/next/type'
import { Home } from 'pageComponents'

const HomePage: NextPageWithLayout = () => <Home />

HomePage.getLayout = MainLayout

export default HomePage
