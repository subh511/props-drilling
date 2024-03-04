import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
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
  console.log("re-rendered")
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
  //const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>increase</button>
      <button onClick={() => setCount(count => count - 1)}>decrease</button>
    </div>
  );
}
export default App;
