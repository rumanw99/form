import React from "react";
import {Link} from 'react-router-dom';
const ContactList = (props) => {


  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  return (

    <table className="table table-striped">
									<thead style={{color:"black"}}>
										<tr>
									
										<th scope="col">{props.t("first")}</th>
										<th scope="col">{props.t("middle")}</th>
										<th scope="col">{props.t("last")}</th>
										<th scope="col">{props.t("birthday")}</th>
										<th scope="col">{props.t("position")}</th>
										<th scope="col">{props.t("certificates")}</th>
										<th scope="col">{props.t("update")}</th>
										<th scope="col">{props.t("delete")}</th>
										</tr>
									</thead>
									<tbody>
					                   {props.contacts.map((contact) => 
                                      
											<tr key={contact.id}>
											    
												<td>{contact.name}</td>
												<td>{contact.middleName}</td>
												<td>{contact.lastName}</td>
												<td>{contact.birthday}</td>
												<td>{contact.country}</td>
												<td>{contact.certificates}</td>
												<td>{
                                                   <Link to="edit">
                                                    <button className='btn btn-primary'
													>{props.t("update")}</button>
                                                    </Link>
                                        }</td>
													
												<td>{<button onClick={() => deleteConactHandler(contact.id)} className='btn btn-danger'>{props.t("delete")}</button>}</td>
												
											</tr>
						 )}
									</tbody>
								</table>
							
  )
};

export default ContactList;