import React from 'react';
import Price from './price';
import './App.css';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <div className="cont">
        <div className="flex">
        <Price price={'$29'} permonth={'Per Month'} li1={'256 MB memory'} li2={'ultimate baefas'} li3={'10 GB Amount of Speace'}btntext={'PURCHASE'}

        />
        </div>
        <div className="flex">
        <Price price={'$49'} permonth={'Per Month'} li1={'512 MB memory'} li2={'ultimate baefas'} li3={'30 GB Amount of Speace'} btntext={'PURCHASE'}/>
        </div>
        <div className="flex">
        <Price price={'$99'} permonth={'Per Month'} li1={'1024 MB memory'} li2={'ultimate baefas'} li3={'100 GB Amount of Speace'} btntext={'PURCHASE'}/>
        </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;