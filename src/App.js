import React from 'react';

//Components
import { Card, Chart, CountryPicker } from './components'
import coronaImage from './Images/image.png'
//Api
import { fetchData } from './api';

//css
import styles from './App.module.css';

class App extends React.Component {
  state = {
  data : {},
  country: ''  
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
      data : fetchedData
    })
  }

  handleCountryChange  = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data : fetchedData,
      country
    })
  }

  render(){
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid-19" />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
  }


export default App;
