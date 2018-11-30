import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addAndClearTask } from '../actions/tasks';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  if (!state.tasks.task) {
    state.tasks.task = '';
  }
  if (!state.tasks.tasks) {
    state.tasks.tasks = [];
  }
  return {
    task: state.tasks.task,
    tasks: state.tasks.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addAndClearTask(task) {
      dispatch(addAndClearTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task))
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
