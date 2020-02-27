import React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import {
  Main,
  AboutUs,
  ContactUs,
  EventPage,
  StarPage,
  Category,
  Stars,
  MyProfile
} from './containers'

import {
  Header,
  Footer
} from './components'

import './animate.scss'
import './main.scss'
import './media.scss'

// const mapStateToProps = ({ darkMode }) => ({ darkMode });

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/events/:id" component={EventPage} />
          <Route exact path="/stars" component={Stars} />
          <Route path="/stars/:id" component={StarPage} />
          <Route path="/category/:type" component={Category} />
          <Route path="/my-profile" component={MyProfile} />
        </Switch>
      </main>
      <Footer/>
    </>
  )
}

export default connect()(withRouter(App))
