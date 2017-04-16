import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default function(wrappedComponent) {

  const mapStateToProps = (state) => ({

  });

  const mapDispatchToProps = (dispatch) => (
    bindActionCreators({}, dispatch)
  )

  return connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);
}
