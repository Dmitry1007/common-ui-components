import Button from "../components/Button";
import { GoCloudDownload, GoDatabase, GoZap, GoStop } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-3">
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
        <Button onMouseEnter={handleMouseEnter} secondary>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>Success</Button>
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

export default ButtonPage;
