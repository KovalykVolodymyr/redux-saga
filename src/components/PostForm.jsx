import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createPost }from '../redux/action'
import {showAlert} from '../redux/action'
import Alert from './Alert'

 class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submitaHandler = event => {
    event.preventDefault()

    const {title} = this.state

    if(!title.trim()){
      return this.props.showAlert('Post can not be empty')
    }

    const newPost ={
      title,
      id:Date.now().toString()
    }

    console.log(newPost)
    this.props.createPost(newPost)
    this.setState({title:''})
    
  }
  changeInputHandler = event =>{
    event.persist()
    //concat old and new state
    this.setState(prev =>({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={ this.submitaHandler }>
        {this.props.alert &&<Alert text={this.props.alert}/>}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" id="title" value={this.state.title} onChange={this.changeInputHandler} />
        </div>
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    )
  }
}

const mapDispathToProps= {
  createPost, showAlert
}

const mapStateoProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateoProps,mapDispathToProps)(PostForm)
