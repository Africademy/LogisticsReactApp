import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getOfficialaddresss, deleteOfficialaddress } from "../../services/officialaddressService";

class Officialaddresss extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:officialaddresss } = await getOfficialaddresss();
    this.setState({ records:officialaddresss });
  }

  handleDelete = async id => {
    const allofficialaddresss = this.state.records; 
    const officialaddresss = allofficialaddresss.filter(m => m._id !== id);
    this.setState({ records:officialaddresss });
    try {
      await deleteOfficialaddress(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allofficialaddresss });
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

    const { totalCount, data: paginatedOfficialaddresss } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/officialaddresss/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Officialaddress
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} officialaddresss</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      City
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      City Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      County Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Cross Street
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Name
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      P O Box Number
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Postal Code
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Province Code
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      State
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Street Address One
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Street Address Two
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Street Address Three
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOfficialaddresss.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.city}</td>
                      <td key="2">{record.cityCode}</td>
                      <td key="3">{record.countyCode}</td>
                      <td key="4">{record.crossStreet}</td>
                      <td key="5">{record.name}</td>
                      <td key="6">{record.pOBoxNumber}</td>
                      <td key="7">{record.postalCode}</td>
                      <td key="8">{record.provinceCode}</td>
                      <td key="9">{record.state}</td>
                      <td key="10">{record.streetAddressOne}</td>
                      <td key="11">{record.streetAddressTwo}</td>
                      <td key="12">{record.streetAddressThree}</td>
                      <td key="13">
                              <Link
                                to={`/viewofficialaddress/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/officialaddresss/${record._id}`}
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
export default Officialaddresss;
