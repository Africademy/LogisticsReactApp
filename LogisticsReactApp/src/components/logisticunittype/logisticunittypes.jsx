import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getLogisticunittypes, deleteLogisticunittype } from "../../services/logisticunittypeService";

class Logisticunittypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:logisticunittypes } = await getLogisticunittypes();
    this.setState({ records:logisticunittypes });
  }

  handleDelete = async id => {
    const alllogisticunittypes = this.state.records; 
    const logisticunittypes = alllogisticunittypes.filter(m => m._id !== id);
    this.setState({ records:logisticunittypes });
    try {
      await deleteLogisticunittype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alllogisticunittypes });
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

    const { totalCount, data: paginatedLogisticunittypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/logisticunittypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Logisticunittype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} logisticunittypes</p>
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
                      Parent Logistic Unit Id
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Gross Weight
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Package Level Code
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Package Type Code
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Trade Item Quantity
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Packaging Marking
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Referenced Transport Equipment
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Returnable Packaging
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Unit Measurement
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Sscc
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Additional Logistic Unit Identification
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Additional Logistic Unit Identification
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Parent Logistic Unit Id
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Gross Weight
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Packaging Marking
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Trade Item Quantity
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Returnable Packaging
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Referenced Transport Equipment
                    </th>
                    <th scope="col" key="22" style={{ cursor: "pointer" }}>
                      Unit Measurement
                    </th>
                    <th scope="col" key="23" style={{ cursor: "pointer" }}>
                      Package Level Code
                    </th>
                    <th scope="col" key="24" style={{ cursor: "pointer" }}>
                      Package Type Code
                    </th>
                    <th scope="col" key="25" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLogisticunittypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.parentLogisticUnitId}</td>
                      <td key="3">{record.grossWeight}</td>
                      <td key="4">{record.packageLevelCode}</td>
                      <td key="5">{record.packageTypeCode}</td>
                      <td key="6">{record.tradeItemQuantity}</td>
                      <td key="7">{record.packagingMarking}</td>
                      <td key="8">{record.referencedTransportEquipment}</td>
                      <td key="9">{record.returnablePackaging}</td>
                      <td key="10">{record.dimension}</td>
                      <td key="11">{record.unitMeasurement}</td>
                      <td key="12">{record.sscc}</td>
                      <td key="13">{record.additionalLogisticUnitIdentification}</td>
                      <td key="14">{record.a.Name}</td>
                      <td key="15">{record.d.Name}</td>
                      <td key="16">{record.p.Name}</td>
                      <td key="17">{record.g.Name}</td>
                      <td key="18">{record.p.Name}</td>
                      <td key="19">{record.t.Name}</td>
                      <td key="20">{record.r.Name}</td>
                      <td key="21">{record.r.Name}</td>
                      <td key="22">{record.u.Name}</td>
                      <td key="23">{record.p.Name}</td>
                      <td key="24">{record.p.Name}</td>
                      <td key="25">
                              <Link
                                to={`/viewlogisticunittype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/logisticunittypes/${record._id}`}
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
export default Logisticunittypes;
