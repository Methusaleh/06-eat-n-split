import "./index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <AddAFriend />
      </div>
      <BillForm />
    </div>
  );
}

function FriendList() {
  const [friends, setFriends] = useState(initialFriends);
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.balance}</p>
      <Button />
    </li>
  );
}

function Button() {
  return <button className="button">Select</button>;
}

function AddAFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend Name</label>
      <input type="text" />
      <label>🌆 Image URL</label>
      <input type="text" />
      <button className="button">Add</button>
    </form>
  );
}

function BillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with Sarah</h2>
      <label>💰 Bill Value</label>
      <input type="text" />
      <label>🙋‍♂️ Your Expense</label>
      <input type="text" />
      <label>🙋‍♀️ Sarah's Expense</label>
      <input type="text" disabled />
      <label>💵 Who is paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value="friend">Sarah</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
