import React from 'react';
import './Layout.scss';
import CalendarGrid from "../CalendarGrid/CalendarGrid";



class Layout extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        
        rightOpen: true,
    }
}

toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
}

render() {
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
        <div id='layout'>


          <div id='main'>
          
          <CalendarGrid></CalendarGrid>
          </div>

          <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Right header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Right content</h3><br/>
                      <p>
                        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
                      </p>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;