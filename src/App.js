import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase, GoZap, GoStop } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button>
          <GoBell />
          Plain
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <GoCloudDownload />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoZap />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoStop />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default App;