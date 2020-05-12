import React from 'react';

import { Cards, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import image from './images/image.png';


class App extends React.Component {
  state = {
    data: {},
   
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }


  render() {
    const {data} = this.state; 

    return (
      <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <Chart /> 
      </div>
    );
  }
}

export default App;