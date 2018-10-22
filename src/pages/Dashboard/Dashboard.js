import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import SimpleTable from './Table'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ['Search Text'],
            responseText: ['Response Text']
        }
        this.handleGetTables = this.handleGetTables.bind(this)
    }

    handleGetTables(e) {
        // const searchText = document.getElementById('searchText').value
        fetch('https://i7c2i9tvk7.execute-api.us-east-2.amazonaws.com/dev')
        .then(r => r.json())
        .then(j => {
            console.log(j.body)
            this.setState({
                responseText: JSON.parse(j.body)
            })
        })
        .catch(err => { console.error(err) })
    }

    render() {
        // this.getMoviesFromApiAsync()
        return (
            <div style={{textAlign: 'center'}}>
                <br /><br />
                <Input id='searchText' onChange={e => this.setState({ searchText: e.target.value })} /><br /><br />
                {this.state.searchText}<br /><br />
                <Button variant='contained' onClick={this.handleGetTables}>Get Tables</Button>
                <br />
                {this.state.responseText && this.state.responseText.toString()}
                {/* {this.state.responseText.map((t, i) => <p key={i}>{t}</p>)}<br /><br /> */}
                <SimpleTable />
            </div>

        )
    }
}

export default Dashboard
