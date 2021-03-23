import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportcapacitybookings, deleteTransportcapacitybooking } from "../../services/transportcapacitybookingService";

class Transportcapacitybookings extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportcapacitybookings } = await getTransportcapacitybookings();
    this.setState({ records:transportcapacitybookings });
  }

  handleDelete = async id => {
    const alltransportcapacitybookings = this.state.records; 
    const transportcapacitybookings = alltransportcapacitybookings.filter(m => m._id !== id);
    this.setState({ records:transportcapacitybookings });
    try {
      await deleteTransportcapacitybooking(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportcapacitybookings });
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

    const { totalCount, data: paginatedTransportcapacitybookings } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportcapacitybookings/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportcapacitybooking
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportcapacitybookings</p>
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
                      Transport Capacity Booking Identification
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Transport Service Category Code
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Transport Service Condition Type Code
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Transport Service Level Code
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Logistic Services Buyer
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Logistic Services Seller
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Pick Up Party
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Drop Off Party
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Planned Pick Up
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Planned Drop Off
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Transport Reference
                    </th>
                    <th scope="col" key="22" style={{ cursor: "pointer" }}>
                      Delivery Terms
                    </th>
                    <th scope="col" key="23" style={{ cursor: "pointer" }}>
                      Handling Instruction
                    </th>
                    <th scope="col" key="24" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Space Requirements
                    </th>
                    <th scope="col" key="25" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Transport Movement
                    </th>
                    <th scope="col" key="26" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Space Requirements
                    </th>
                    <th scope="col" key="27" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Transport Movement
                    </th>
                    <th scope="col" key="28" style={{ cursor: "pointer" }}>
                      Avp List
                    </th>
                    <th scope="col" key="29" style={{ cursor: "pointer" }}>
                      Document Status Code
                    </th>
                    <th scope="col" key="30" style={{ cursor: "pointer" }}>
                      Drop Off Party
                    </th>
                    <th scope="col" key="31" style={{ cursor: "pointer" }}>
                      Planned Pick Up
                    </th>
                    <th scope="col" key="32" style={{ cursor: "pointer" }}>
                      Planned Drop Off
                    </th>
                    <th scope="col" key="33" style={{ cursor: "pointer" }}>
                      Transport Reference
                    </th>
                    <th scope="col" key="34" style={{ cursor: "pointer" }}>
                      Handling Instruction
                    </th>
                    <th scope="col" key="35" style={{ cursor: "pointer" }}>
                      Document Action Code
                    </th>
                    <th scope="col" key="36" style={{ cursor: "pointer" }}>
                      Transport Capacity Booking Identification
                    </th>
                    <th scope="col" key="37" style={{ cursor: "pointer" }}>
                      Transport Service Category Code
                    </th>
                    <th scope="col" key="38" style={{ cursor: "pointer" }}>
                      Transport Service Condition Type Code
                    </th>
                    <th scope="col" key="39" style={{ cursor: "pointer" }}>
                      Transport Service Level Code
                    </th>
                    <th scope="col" key="40" style={{ cursor: "pointer" }}>
                      Logistic Services Buyer
                    </th>
                    <th scope="col" key="41" style={{ cursor: "pointer" }}>
                      Logistic Services Seller
                    </th>
                    <th scope="col" key="42" style={{ cursor: "pointer" }}>
                      Pick Up Party
                    </th>
                    <th scope="col" key="43" style={{ cursor: "pointer" }}>
                      Delivery Terms
                    </th>
                    <th scope="col" key="44" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportcapacitybookings.map(record => (
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
                      <td key="11">{record.transportCapacityBookingIdentification}</td>
                      <td key="12">{record.transportServiceCategoryCode}</td>
                      <td key="13">{record.transportServiceConditionTypeCode}</td>
                      <td key="14">{record.transportServiceLevelCode}</td>
                      <td key="15">{record.logisticServicesBuyer}</td>
                      <td key="16">{record.logisticServicesSeller}</td>
                      <td key="17">{record.pickUpParty}</td>
                      <td key="18">{record.dropOffParty}</td>
                      <td key="19">{record.plannedPickUp}</td>
                      <td key="20">{record.plannedDropOff}</td>
                      <td key="21">{record.transportReference}</td>
                      <td key="22">{record.deliveryTerms}</td>
                      <td key="23">{record.handlingInstruction}</td>
                      <td key="24">{record.transportCapacityBookingSpaceRequirements}</td>
                      <td key="25">{record.transportCapacityBookingTransportMovement}</td>
                      <td key="26">{record.t.Name}</td>
                      <td key="27">{record.t.Name}</td>
                      <td key="28">{record.a.Name}</td>
                      <td key="29">{record.d.Name}</td>
                      <td key="30">{record.d.Name}</td>
                      <td key="31">{record.p.Name}</td>
                      <td key="32">{record.p.Name}</td>
                      <td key="33">{record.t.Name}</td>
                      <td key="34">{record.h.Name}</td>
                      <td key="35">{record.d.Name}</td>
                      <td key="36">{record.t.Name}</td>
                      <td key="37">{record.t.Name}</td>
                      <td key="38">{record.t.Name}</td>
                      <td key="39">{record.t.Name}</td>
                      <td key="40">{record.l.Name}</td>
                      <td key="41">{record.l.Name}</td>
                      <td key="42">{record.p.Name}</td>
                      <td key="43">{record.d.Name}</td>
                      <td key="44">
                              <Link
                                to={`/viewtransportcapacitybooking/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportcapacitybookings/${record._id}`}
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
export default Transportcapacitybookings;
