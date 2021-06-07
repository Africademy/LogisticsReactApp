import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getPersons, deletePerson } from "../../services/personService";

class Persons extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:persons } = await getPersons();
    this.setState({ records:persons });
  }

  handleDelete = async id => {
    const allpersons = this.state.records; 
    const persons = allpersons.filter(m => m._id !== id);
    this.setState({ records:persons });
    try {
      await deletePerson(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allpersons });
    }
};


  handlePageChange = pageNo => {
    this.setState({ currentPage: pageNo });
  };

  getPagedData = () => {
    
    const {
      pageSize,
      currentPage,
      records
    } = this.state;
    
    const paginatedRecords = paginate(records, currentPage, pageSize);
    
    return { totalCount: !records.length ? 0 : records.length, data: paginatedRecords };
  
  };

  render() {

    const { totalCount, data: paginatedPersons } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/persons/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Person
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} persons</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Id
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      Person Name
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Date Of Birth
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Gender
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Nationality
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Identity Document
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Identity Document
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Gender
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Nationality
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPersons.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.personName}</td>
                      <td key="3">{record.dateOfBirth}</td>
                      <td key="4">{record.gender}</td>
                      <td key="5">{record.nationality}</td>
                      <td key="6">{record.identityDocument}</td>
                      <td key="7">{record.i.Name}</td>
                      <td key="8">{record.g.Name}</td>
                      <td key="9">{record.n.Name}</td>
                      <td key="10">
                              <Link
                                to={`/viewperson/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/persons/${record._id}`}
                                className="btn btn-warning btn-sm m-1"
                                >
                                Update
                              </Link>
                            <button
                              onClick={() => this.handleDelete(record._id)}
                              className="btn btn-danger btn-sm m-1"
                              >
                              Delete
                            </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          
            <Pagination
              itemsCount={totalCount}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
      </React.Fragment>
    );
  }
}
export default Persons;
