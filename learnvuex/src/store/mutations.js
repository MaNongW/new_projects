import {INCREMENT} from './mutations-types'

export default {
    [INCREMENT](state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    updateInfo(state) {
        state.info.name = 'coderwhy'
    },
    incrementCount(state, payload) {
        state.counter += payload.count
    },
    addStudent(state, stus) {
        state.students.push(stus)
    }
}