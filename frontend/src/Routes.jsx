import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Aluno from './components/Aluno'

export default props => (
    <BrowserRouter>
        <div>
            <Route path='/alunos' component={Aluno} />
            {/* <Route path='/cursos' component={} /> */}
            {/* <Route path='/instrutores' component={} /> */}
            {/* <Route path='/turmas' component={} /> */}
            <Redirect from='*' to='/alunos' />
        </div>
    </BrowserRouter>
)