// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import TagReducer from './redux/Tags/index';
import { combineReducers, createStore } from 'redux'
import Grid from '@mui/material/Unstable_Grid2';
import LeftSide from './components/LeftSide';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Tag from './pages/Tag';
import Checklist from './pages/Checklist';
import Newchecklist from './pages/Newchecklist';
import Checklist_vabali from './pages/Checklist/checklist_vabali';
import Checklistcontablity from './pages/Checklist/contability'
import Squadre from './pages/Squadre/';

function App() {

  const rootReducer = combineReducers({
    TagReducer,
  })

  return (
    <>
      <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
          <Grid container spacing={0} style={{ height: "100vh" }} >
            <Grid xs={3} md={3}>
              <LeftSide />
            </Grid>
            <Grid xs={9} md={9}>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tag" element={<Tag />} />
                <Route path="/checklist" element={<Checklist />} />
                <Route path="/newchecklist" element={<Newchecklist />} />
                <Route path="/squadre" element={<Squadre />} />
                <Route path="/checklist/vabali" element={<Checklist_vabali />} />
                <Route path="/checklist/contability" element={<Checklistcontablity />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
