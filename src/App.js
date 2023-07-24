
import './App.css';
import ProfileProvider from './context/ProfileProvider';
import RoutesPath from './routes/RoutesPath';

function App() {
  return (
    <div>
      <ProfileProvider>
        <RoutesPath/>
      </ProfileProvider>
    </div>
  );
}

export default App;
