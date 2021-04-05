import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportcapacitybookingspacerequirements, deleteTransportcapacitybookingspacerequirement } from "../../services/transportcapacitybookingspacerequirementService";

class Transportcapacitybookingspacerequirements extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportcapacitybookingspacerequirements } = await getTransportcapacitybookingspacerequirements();
    this.setState({ records:transportcapacitybookingspacerequirements });
  }

  handleDelete = async id => {
    const alltransportcapacitybookingspacerequirements = this.state.records; 
    const transportcapacitybookingspacerequirements = alltransportcapacitybookingspacerequirements.filter(m => m._id !== id);
    this.setState({ records:transportcapacitybookingspacerequirements });
    try {
      await deleteTransportcapacitybookingspacerequirement(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportcapacitybookingspacerequirements });
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

    const { totalCount, data: paginatedTransportcapacitybookingspacerequirements } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportcapacitybookingspacerequirements/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportcapacitybookingspacerequirement
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportcapacitybookingspacerequirements</p>
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
                      Transport Cargo Characteristics
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Package Total
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Included Transport Means
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Passenger Information
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Included Transport Equipment
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Number Of Pieces Of Equipment
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Transport Equipment Weight
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Transport Equipment Weight
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Transport Cargo Characteristics
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Included Transport Equipment
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Package Total
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Passenger Information
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Included Transport Means
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportcapacitybookingspacerequirements.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.transportCargoCharacteristics}</td>
                      <td key="3">{record.packageTotal}</td>
                      <td key="4">{record.includedTransportMeans}</td>
                      <td key="5">{record.passengerInformation}</td>
                      <td key="6">{record.includedTransportEquipment}</td>
                      <td key="7">{record.numberOfPiecesOfEquipment}</td>
                      <td key="8">{record.transportEquipmentWeight}</td>
                      <td key="9">{record.dimension}</td>
                      <td key="10">{record.t.Name}</td>
                      <td key="11">{record.t.Name}</td>
                      <td key="12">{record.i.Name}</td>
                      <td key="13">{record.d.Name}</td>
                      <td key="14">{record.p.Name}</td>
                      <td key="15">{record.p.Name}</td>
                      <td key="16">{record.i.Name}</td>
                      <td key="17">
                              <Link
                                to={`/viewtransportcapacitybookingspacerequirement/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportcapacitybookingspacerequirements/${record._id}`}
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
export default Transportcapacitybookingspacerequirements;
