import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getPassengerinformationtypes, deletePassengerinformationtype } from "../../services/passengerinformationtypeService";

class Passengerinformationtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:passengerinformationtypes } = await getPassengerinformationtypes();
    this.setState({ records:passengerinformationtypes });
  }

  handleDelete = async id => {
    const allpassengerinformationtypes = this.state.records; 
    const passengerinformationtypes = allpassengerinformationtypes.filter(m => m._id !== id);
    this.setState({ records:passengerinformationtypes });
    try {
      await deletePassengerinformationtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allpassengerinformationtypes });
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

    const { totalCount, data: paginatedPassengerinformationtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/passengerinformationtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Passengerinformationtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} passengerinformationtypes</p>
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
                      Number Of Passengers
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Passenger Category Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Passenger Tariff Group
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Person
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Passenger Category Code
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPassengerinformationtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.numberOfPassengers}</td>
                      <td key="3">{record.passengerCategoryCode}</td>
                      <td key="4">{record.passengerTariffGroup}</td>
                      <td key="5">{record.person}</td>
                      <td key="6">{record.p.Name}</td>
                      <td key="7">
                              <Link
                                to={`/viewpassengerinformationtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/passengerinformationtypes/${record._id}`}
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
export default Passengerinformationtypes;
