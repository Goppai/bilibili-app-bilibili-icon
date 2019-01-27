import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header/Header'
import HeaderNav from './Header/Header-Nav/Header-Nav'
import Ad from './Ad/Ad'
import BiliLive from './Bili-Live/Bili-Live'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header/>
                <HeaderNav/>
                <Ad />
                <BiliLive />
            </div>
        )
    }
}

export default Home