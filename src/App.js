import React from 'react';
import Customer from "./components/Customer";
import './App.css';

const customers = [{
    'id': 1,
    'images': 'http://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '900909',
    'gender': '남자',
    'job': '학생'
},{
    'id': 2,
    'images': 'http://placeimg.com/64/64/1',
    'name': '홍길동2',
    'birthday': '910909',
    'gender': '남자2',
    'job': '학생2'
},{
    'id': 3,
    'images': 'http://placeimg.com/64/64/2',
    'name': '홍길동3',
    'birthday': '920909',
    'gender': '남자3',
    'job': '학생3'
}];

function App() {
  return (
      <>
          {customers.map(c => {
              return (
                  <Customer
                      key={c.id}
                      id={c.id}
                      images={c.images}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                  />
              )
          })}
      </>
  );
}

export default App;
