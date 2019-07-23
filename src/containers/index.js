import { connect } from 'react-redux'
import { changeStore } from '../actions'
import Test from '../components'
const mapStateToProps = (state, ownProps) => {
  return {
    text: state
  }
}
const mapDispatchToProps = (dispatch) => ({
  onClick: (text) => dispatch(changeStore(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(Test)