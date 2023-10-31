// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="app1" />
      <div>
        <button>Submit</button>
        <button>Reset</button>
        <button>Skip</button>
      </div>
    </div>
  );
}

export default App;
