import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ['Search Text'],
            responseText: ['Response Text']
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
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
            <div>
                <br /><br />
                <Input id='searchText' onChange={e => this.setState({ searchText: e.target.value })} /><br /><br />
                {this.state.searchText}<br /><br />
                <Button variant='contained' onClick={this.handleSubmit}>Query</Button>
                {this.state.responseText.map((t, i) => <p key={i}>{t}</p>)}<br /><br />
            </div>

        )
    }
}

export default Dashboard
