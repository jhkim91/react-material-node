import React from 'react';
import Customer from "./components/Customer";
import './App.css';

const customer = {
    'name': '홍길동',
    'birthday': '900909',
    'gender': '남자',
    'jab': '학생'
};

function App() {
  return (
    <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        jab={customer.jab}
    />
  );
}

export default App;
