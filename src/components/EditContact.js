import React from "react";
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from "react-router-dom";

class EditContact extends React.Component {
    
        state = {
            
            name:"",
            middleName:"",
            lastName:"",
            birthday:"",
            country:"",
            certificates:"",
        };

        selectCountry (val) {
            this.setState({ country: val });
          }
        
      update = (e) => {
      e.preventDefault();
      if (this.state.name === "" || this.state.middleName === "" || this.state.lastName === "" || this.state.birthday === "" || this.state.country ==="" || this.state.certificates === "") {
        alert("ALl the fields are mandatory!");
        return;
      }
      this.props.addContactHandler(this.state);
      this.setState({
          name: "",
          middleName: "",
          lastName: "",
          birthday: "",
          country: "",
          certificates: "",
       });
      this.props.history.push("/");
       
    };
    render() {
        const { country } = this.state;
      return (
          <form onSubmit={this.update} className='wardee'>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>First Name :</strong></label>
              <div className="form-group w-75">
                  <input type="text" className="form-control"
                  name="name"
                     value={this.state.name}
                     onChange={(e) => this.setState({name:e.target.value})}
                     placeholder="first name"
                  />
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>Middle Name</strong></label>
              <div className="form-group w-75">
                  <input type="text" className="form-control"
                  name="middleName"
                      value={this.state.middleName}
                     onChange={(e) => this.setState({middleName:e.target.value})}
                     placeholder="middle name"
                  />
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>Last Name</strong></label>
              <div className="form-group w-75">
                  <input type="text" className="form-control"
                  name="lastName"
                       value={this.state.lastName}
                     onChange={(e) => this.setState({lastName:e.target.value})}
                     placeholder="last name"
                  />
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>Birthday</strong></label>
              <div className="form-group w-75">
                  <input type="date" className="form-control"
                  name="birthday"
                       value={this.state.birthday}
                     onChange={(e) => this.setState({birthday:e.target.value})}
                     placeholder="birthday"
                  />
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>Position</strong></label>
              <div className="w-75">
              <CountryDropdown
                className="form-control form-control-lg"
                        value={country}
                        onChange={(val) => this.selectCountry(val)} />
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="mb-1"  htmlFor="val-email"><strong>Certificates </strong></label>
              <div className="w-75">
                  <select name="certificates" value={this.state.certificates}  onChange={e => this.setState({certificates:e.target.value})} className="form-control form-control-lg">
                      <option value="Enter Univercity">Enter Univercity</option>
                      <option value="Univercity1">Univercity1</option>
                      <option value="Univercity2">Univercity2</option>
                      <option value="Univercity3">Univercity3</option>
                  </select>
              </div>
          </div>
           
          <div className="text-center form-group">
            <Link to="/">
              <input 
              type='submit'
              value="Update" 
              className="btn btn-primary btn-block"
              />
              </Link>
          </div>
          <div className="text-center form-group">
            <Link to="/">
              <button 
              className="btn btn-danger btn-block"
              >Concel</button>
              </Link>
          </div>
      </form>
      );
    }
}

export default EditContact;