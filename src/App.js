import React, {Component} from 'react';
import TwsLayout from './components/tws-layout';
import ScoreSheetTable from './components/score-sheet-table';
import Colors from './components/colors';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <TwsLayout>
            <Route path="/score-sheet" component={ScoreSheetTable}/>
            <Route exact path="/" component={Colors}/>
            <Route path="/colors" component={Colors}/>
          </TwsLayout>
        </Router>

    )
  }
}

export default App;
