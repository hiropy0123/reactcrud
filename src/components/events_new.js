import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className="error">{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="送信" disabled={pristine || submitting || invalid} />
          <Link to="/">キャンセル</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = "タイトルを入力してください"
  }
  if (!values.body) {
    errors.body = "本文を入力してください"
  }

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect( null, mapDispatchToProps )(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
