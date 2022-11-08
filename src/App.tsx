import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "みく",
  email: "123abc@abc.com",
  address: "address street"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
