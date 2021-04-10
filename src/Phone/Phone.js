import {Component} from 'react';

class Phone extends Component{
        render(){
          //storing values of passed arguments in a variable
          const phone = this.props;
          return (
            <div>
              <p>This is Phone Category!!!!!</p>
              <p>
                I own {phone.name} having a cost of {phone.cost}
              </p>
              <p>{phone.children}</p>
            </div>
          );
        }
}

export default Phone;