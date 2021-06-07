import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportinstructiontransportmovementtypes, deleteTransportinstructiontransportmovementtype } from "../../services/transportinstructiontransportmovementtypeService";

class Transportinstructiontransportmovementtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportinstructiontransportmovementtypes } = await getTransportinstructiontransportmovementtypes();
    this.setState({ records:transportinstructiontransportmovementtypes });
  }

  handleDelete = async id => {
    const alltransportinstructiontransportmovementtypes = this.state.records; 
    const transportinstructiontransportmovementtypes = alltransportinstructiontransportmovementtypes.filter(m => m._id !== id);
    this.setState({ records:transportinstructiontransportmovementtypes });
    try {
      await deleteTransportinstructiontransportmovementtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportinstructiontransportmovementtypes });
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

    const { totalCount, data: paginatedTransportinstructiontransportmovementtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportinstructiontransportmovementtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportinstructiontransportmovementtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportinstructiontransportmovementtypes</p>
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
                      Sequence Number
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Transport Mode Type Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Route I D
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Carrier
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Transport Status Responsible Party
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Transport Means
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Planned Departure
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Planned Arrival
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Planned Waypoint
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Associated Person
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Route I D
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Planned Departure
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Planned Arrival
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Planned Waypoint
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Carrier
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Transport Status Responsible Party
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Transport Means
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Transport Mode Type Code
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Associated Person
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportinstructiontransportmovementtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.sequenceNumber}</td>
                      <td key="3">{record.transportModeTypeCode}</td>
                      <td key="4">{record.routeID}</td>
                      <td key="5">{record.carrier}</td>
                      <td key="6">{record.transportStatusResponsibleParty}</td>
                      <td key="7">{record.transportMeans}</td>
                      <td key="8">{record.plannedDeparture}</td>
                      <td key="9">{record.plannedArrival}</td>
                      <td key="10">{record.plannedWaypoint}</td>
                      <td key="11">{record.associatedPerson}</td>
                      <td key="12">{record.r.Name}</td>
                      <td key="13">{record.p.Name}</td>
                      <td key="14">{record.p.Name}</td>
                      <td key="15">{record.p.Name}</td>
                      <td key="16">{record.c.Name}</td>
                      <td key="17">{record.t.Name}</td>
                      <td key="18">{record.t.Name}</td>
                      <td key="19">{record.t.Name}</td>
                      <td key="20">{record.a.Name}</td>
                      <td key="21">
                              <Link
                                to={`/viewtransportinstructiontransportmovementtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportinstructiontransportmovementtypes/${record._id}`}
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
export default Transportinstructiontransportmovementtypes;
