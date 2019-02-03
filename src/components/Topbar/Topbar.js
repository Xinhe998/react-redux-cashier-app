import React, { Component } from 'react';
import './Topbar.scss';
import searchIcon from './search.png';


class Topbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            search: ''
        }
    }
    //React 16.3 新的Hook，取代componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match) {
            switch (nextProps.match.params.type) {
                case 'foods':
                    return {
                        title: 'Foods'
                    }
                case 'drinks':
                    return {
                        title: 'Drinks'
                    }
            }
        }
        return null
    }
    handleChange = (e) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({ search: e.target.value })
        }
    }
    render() {
        return (
            <div className="topbar">
                <span className="title">{this.state.title}</span>
                <div className="searchBox">
                    <img src={searchIcon} />
                    <input type="text" className="searchInput"
                        value={this.state.search}
                        placeholder={'Search for items'}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}
export default Topbar;