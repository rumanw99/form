import React  from "react";
import '../App.css';
import { CountryDropdown } from 'react-country-region-selector';

class AddContact extends React.Component {
    
       
        state = {
            name: "",
            middleName: "",
            lastName: "",
            birthday: "",
            country: '', 
            certificates: "",
        }
       
        selectCountry (val) {
            this.setState({ country: val });
          }


  btnH = (e) => {
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
  };


  render() {
    const { country } = this.state;
    return (
        <form onSubmit={this.btnH}>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("first")}</strong></label>
            <div className="form-group w-75">
                <input type="text" className="form-control"
                   value={this.state.name}
                   onChange={(e) => this.setState({name:e.target.value})}
                   placeholder="first name"
                />
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("middle")}</strong></label>
            <div className="form-group w-75">
                <input type="text" className="form-control"
                    value={this.state.middleName}
                   onChange={(e) => this.setState({middleName:e.target.value})}
                   placeholder="middle name"
                />
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("last")}</strong></label>
            <div className="form-group w-75">
                <input type="text" className="form-control"
                     value={this.state.lastName}
                   onChange={(e) => this.setState({lastName:e.target.value})}
                   placeholder="last name"
                />
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("birthday")}</strong></label>
            <div className="form-group w-75">
                <input type="date" className="form-control"
                     value={this.state.birthday}
                   onChange={(e) => this.setState({birthday:e.target.value})}

                   placeholder="birthday"
                />
                  
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("position")}</strong></label>
            <div className="w-75">
                <CountryDropdown
                className="form-control form-control-lg"
                        value={country}
                        onChange={(val) => this.selectCountry(val)} />
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-1"  htmlFor="val-email"><strong>{this.props.t("certificates")} </strong></label>
            <div className="w-75">
                <select value={this.state.certificates}  onChange={e => this.setState({certificates:e.target.value})} className="form-control form-control-lg">
                    <option selected>Enter Univercity</option>
                    <option value="Univercity1">Univercity1</option>
                    <option value="Univercity2">Univercity2</option>
                    <option value="Univercity3">Univercity3</option>
                    <option value="Univercity4">Univercity4</option>
                </select>

            </div>
        </div>
         
        <div className="text-center form-group">
            <button 
            type='submit'
             
            className="btn btn-primary btn-block"
            >{this.props.t("submit")} </button>
        </div>
    </form>
    );
  }
}

export default AddContact;