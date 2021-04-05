import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getLogisticlocationtypes, deleteLogisticlocationtype } from "../../services/logisticlocationtypeService";

class Logisticlocationtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:logisticlocationtypes } = await getLogisticlocationtypes();
    this.setState({ records:logisticlocationtypes });
  }

  handleDelete = async id => {
    const alllogisticlocationtypes = this.state.records; 
    const logisticlocationtypes = alllogisticlocationtypes.filter(m => m._id !== id);
    this.setState({ records:logisticlocationtypes });
    try {
      await deleteLogisticlocationtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alllogisticlocationtypes });
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

    const { totalCount, data: paginatedLogisticlocationtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/logisticlocationtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Logisticlocationtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} logisticlocationtypes</p>
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
                      Un Location Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Gln
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Additional Location Identification
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Sublocation Identification
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Location Name
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Location Specific Instructions
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Utc Offset
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Address
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Contact
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Regular Operating Hours
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Special Operating Hours
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Location Specific Instructions
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Additional Location Identification
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Regular Operating Hours
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Special Operating Hours
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Address
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Contact
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Un Location Code
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLogisticlocationtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.unLocationCode}</td>
                      <td key="3">{record.gln}</td>
                      <td key="4">{record.additionalLocationIdentification}</td>
                      <td key="5">{record.sublocationIdentification}</td>
                      <td key="6">{record.locationName}</td>
                      <td key="7">{record.locationSpecificInstructions}</td>
                      <td key="8">{record.utcOffset}</td>
                      <td key="9">{record.address}</td>
                      <td key="10">{record.contact}</td>
                      <td key="11">{record.regularOperatingHours}</td>
                      <td key="12">{record.specialOperatingHours}</td>
                      <td key="13">{record.l.Name}</td>
                      <td key="14">{record.a.Name}</td>
                      <td key="15">{record.r.Name}</td>
                      <td key="16">{record.s.Name}</td>
                      <td key="17">{record.a.Name}</td>
                      <td key="18">{record.c.Name}</td>
                      <td key="19">{record.u.Name}</td>
                      <td key="20">
                              <Link
                                to={`/viewlogisticlocationtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/logisticlocationtypes/${record._id}`}
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
export default Logisticlocationtypes;
