import { Component, State, h } from '@stencil/core';

import { loadPeople } from '../../data/people.js';

@Component({
  tag: 'wase-people',
  shadow: true
})
export class WasePeople {
  @State() peopleList: object[] = [];

  async componentDidLoad() {
     const loadedPeople = await loadPeople();
     console.log("Finished loading people", loadedPeople);
     this.peopleList = loadedPeople;
  }

  render() {
    console.log("In Render function");
    if(this.peopleList.length < 1) {
        return <h1>Nothing has loaded yet</h1>;
    }
    
    const peopleElements = this.peopleList.map((person) => <wase-person {...person} ></wase-person>);
        
    return <section>
        <h1>Loaded {this.peopleList.length} people!</h1>
        <div>{peopleElements}</div>
    </section>
    
  }
}
