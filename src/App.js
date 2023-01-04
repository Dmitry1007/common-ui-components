import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>Click</Button>
      </div>
      <div>
        <Button danger outline>Push</Button>
      </div>
      <div>
        <Button warning>Add To Cart</Button>
      </div>
      <div>
        <Button secondary outline>Buy Now</Button>
      </div>
      <div>
        <Button primary rounded>Button</Button>
      </div>
    </div>
  );
}

export default App;