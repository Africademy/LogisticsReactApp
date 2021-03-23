import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportcapacitybookingresponses, deleteTransportcapacitybookingresponse } from "../../services/transportcapacitybookingresponseService";

class Transportcapacitybookingresponses extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportcapacitybookingresponses } = await getTransportcapacitybookingresponses();
    this.setState({ records:transportcapacitybookingresponses });
  }

  handleDelete = async id => {
    const alltransportcapacitybookingresponses = this.state.records; 
    const transportcapacitybookingresponses = alltransportcapacitybookingresponses.filter(m => m._id !== id);
    this.setState({ records:transportcapacitybookingresponses });
    try {
      await deleteTransportcapacitybookingresponse(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportcapacitybookingresponses });
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

    const { totalCount, data: paginatedTransportcapacitybookingresponses } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportcapacitybookingresponses/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportcapacitybookingresponse
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportcapacitybookingresponses</p>
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
                      Creation Date Time
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Document Status Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Document Action Code
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Document Structure Version
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Last Update Date Time
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Revision Number
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Extension
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Document Effective Date
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Avp List
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Response Identification
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Status Code
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Logistic Services Buyer
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Logistic Services Seller
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Response Identification
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Avp List
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Document Status Code
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Document Action Code
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Status Code
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Logistic Services Buyer
                    </th>
                    <th scope="col" key="22" style={{ cursor: "pointer" }}>
                      Logistic Services Seller
                    </th>
                    <th scope="col" key="23" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking
                    </th>
                    <th scope="col" key="24" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportcapacitybookingresponses.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.creationDateTime}</td>
                      <td key="3">{record.documentStatusCode}</td>
                      <td key="4">{record.documentActionCode}</td>
                      <td key="5">{record.documentStructureVersion}</td>
                      <td key="6">{record.lastUpdateDateTime}</td>
                      <td key="7">{record.revisionNumber}</td>
                      <td key="8">{record.extension}</td>
                      <td key="9">{record.documentEffectiveDate}</td>
                      <td key="10">{record.avpList}</td>
                      <td key="11">{record.transportCapacityBookingResponseIdentification}</td>
                      <td key="12">{record.transportCapacityBookingStatusCode}</td>
                      <td key="13">{record.logisticServicesBuyer}</td>
                      <td key="14">{record.logisticServicesSeller}</td>
                      <td key="15">{record.transportCapacityBooking}</td>
                      <td key="16">{record.t.Name}</td>
                      <td key="17">{record.a.Name}</td>
                      <td key="18">{record.d.Name}</td>
                      <td key="19">{record.d.Name}</td>
                      <td key="20">{record.t.Name}</td>
                      <td key="21">{record.l.Name}</td>
                      <td key="22">{record.l.Name}</td>
                      <td key="23">{record.t.Name}</td>
                      <td key="24">
                              <Link
                                to={`/viewtransportcapacitybookingresponse/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportcapacitybookingresponses/${record._id}`}
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
export default Transportcapacitybookingresponses;
