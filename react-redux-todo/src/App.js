import React from 'react'
import Footer from './Footer'
import AddTodoContainer from './AddTodoContainer'
import VisibleTodoListContainer from './VisibleTodoListContainer'

const App = () => (
    <div>
        <AddTodoContainer />
        <VisibleTodoListContainer />
        <Footer />
    </div>
)

export default App