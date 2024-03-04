import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { countAtom } from "./Components/store/atoms/Count";
function App() {
  //wrap anyone that wants to use the teleported value inside a provider;
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}
export default App;
