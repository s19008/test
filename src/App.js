import React, { Component } from 'react'
import './App.css'
import { Button } from '@material-ui/core'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      c_100: '100.jpg',
      c_200: '200.jpg',
      c_403: '403.jpg',
      c_404: '404.jpg',
      c_599: '599.jpg',
      cat: 'https://http.cat/',
      cat_url: null
    }
  }

  URL_cat100 () {
    this.setState({ cat_url: this.state.cat + this.state.c_100 })
  }

  URL_cat200 () {
    this.setState({ cat_url: this.state.cat + this.state.c_200 })
  }

  URL_cat403 () {
    this.setState({ cat_url: this.state.cat + this.state.c_403 })
  }

  URL_cat404 () {
    this.setState({ cat_url: this.state.cat + this.state.c_404 })
  }

  URL_cat599 () {
    this.setState({ cat_url: this.state.cat + this.state.c_599 })
  }

  render () {
    return (
      <div>
        <header title='ステータスコード猫' />
        <Button
          onClick={() => this.URL_cat100()}
          variant='contained'
          color='primary'
        >
          cat 100
        </Button>

        <Button
          onClick={() => this.URL_cat200()}
          variant='contained'
          color='primary'
        >
          cat 200
        </Button>

        <Button
          onClick={() => this.URL_cat403()}
          variant='contained'
          color='primary'
        >
          cat 403
        </Button>

        <Button
          onClick={() => this.URL_cat404()}
          variant='contained'
          color='primary'
        >
          cat 404
        </Button>

        <Button
          onClick={() => this.URL_cat599()}
          variant='contained'
          color='primary'
        >
          cat 599
        </Button>

        <img src={this.state.cat_url}></img>
      </div>
    )
  }
}
