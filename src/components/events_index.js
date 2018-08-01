import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

// Material UI
// import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, event => (
          <TableRow key={event.id}>
            <TableCell>{event.id}</TableCell>
            <TableCell>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </TableCell>
            <TableCell>{event.body}</TableCell>
          </TableRow>
    ))
  }
  render() {
    return (
      <React.Fragment>
        <Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.renderEvents()}
              </TableBody>
            </Table>
          </Paper>

          <Link to="/events/new">
            <Button>
              <AddIcon />
            </Button>
          </Link>
        </Typography>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect( mapStateToProps, mapDispatchToProps )( EventsIndex )
