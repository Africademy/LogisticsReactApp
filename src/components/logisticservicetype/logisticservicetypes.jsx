import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getLogisticservicetypes, deleteLogisticservicetype } from "../../services/logisticservicetypeService";

class Logisticservicetypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:logisticservicetypes } = await getLogisticservicetypes();
    this.setState({ records:logisticservicetypes });
  }

  handleDelete = async id => {
    const alllogisticservicetypes = this.state.records; 
    const logisticservicetypes = alllogisticservicetypes.filter(m => m._id !== id);
    this.setState({ records:logisticservicetypes });
    try {
      await deleteLogisticservicetype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alllogisticservicetypes });
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

    const { totalCount, data: paginatedLogisticservicetypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/logisticservicetypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Logisticservicetype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} logisticservicetypes</p>
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
                      Logistic Service Requirement Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Cash On Delivery Amount
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Insurance Value
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Logistic Service Charge Amount
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Cash On Delivery Payer
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Cash On Delivery Bill To
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Cash On Delivery Amount
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Insurance Value
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Logistic Service Charge Amount
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Cash On Delivery Payer
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Cash On Delivery Bill To
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Logistic Service Requirement Code
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLogisticservicetypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.logisticServiceRequirementCode}</td>
                      <td key="3">{record.cashOnDeliveryAmount}</td>
                      <td key="4">{record.insuranceValue}</td>
                      <td key="5">{record.logisticServiceChargeAmount}</td>
                      <td key="6">{record.cashOnDeliveryPayer}</td>
                      <td key="7">{record.cashOnDeliveryBillTo}</td>
                      <td key="8">{record.c.Name}</td>
                      <td key="9">{record.i.Name}</td>
                      <td key="10">{record.l.Name}</td>
                      <td key="11">{record.c.Name}</td>
                      <td key="12">{record.c.Name}</td>
                      <td key="13">{record.l.Name}</td>
                      <td key="14">
                              <Link
                                to={`/viewlogisticservicetype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/logisticservicetypes/${record._id}`}
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
export default Logisticservicetypes;
