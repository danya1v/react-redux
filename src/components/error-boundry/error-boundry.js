import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        //Если произошла ошибка, рендерим эррор
        if (this.state.error) {
            return <Error/>
        } 
        // если нет ошибок, то рендер структуры компонента, всё что в эррорБандару
        return this.props.children
    }
}