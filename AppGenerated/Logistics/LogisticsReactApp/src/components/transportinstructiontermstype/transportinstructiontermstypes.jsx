import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportinstructiontermstypes, deleteTransportinstructiontermstype } from "../../services/transportinstructiontermstypeService";

class Transportinstructiontermstypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportinstructiontermstypes } = await getTransportinstructiontermstypes();
    this.setState({ records:transportinstructiontermstypes });
  }

  handleDelete = async id => {
    const alltransportinstructiontermstypes = this.state.records; 
    const transportinstructiontermstypes = alltransportinstructiontermstypes.filter(m => m._id !== id);
    this.setState({ records:transportinstructiontermstypes });
    try {
      await deleteTransportinstructiontermstype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportinstructiontermstypes });
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

    const { totalCount, data: paginatedTransportinstructiontermstypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportinstructiontermstypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportinstructiontermstype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportinstructiontermstypes</p>
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
                      Transport Service Category Type
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Transport Collect Charge Amount
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Transport Payment Method Type Code
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Transport Pick Up Charge Amount
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Transport Service Condition Type
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Transport Service Level Code
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Route I D
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Logistic Service
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Transport Collect Charge Amount
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Transport Pick Up Charge Amount
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Route I D
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Logistic Service
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Transport Service Category Type
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Transport Payment Method Type Code
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Transport Service Condition Type
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Transport Service Level Code
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportinstructiontermstypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.transportServiceCategoryType}</td>
                      <td key="3">{record.transportCollectChargeAmount}</td>
                      <td key="4">{record.transportPaymentMethodTypeCode}</td>
                      <td key="5">{record.transportPickUpChargeAmount}</td>
                      <td key="6">{record.transportServiceConditionType}</td>
                      <td key="7">{record.transportServiceLevelCode}</td>
                      <td key="8">{record.routeID}</td>
                      <td key="9">{record.logisticService}</td>
                      <td key="10">{record.t.Name}</td>
                      <td key="11">{record.t.Name}</td>
                      <td key="12">{record.r.Name}</td>
                      <td key="13">{record.l.Name}</td>
                      <td key="14">{record.t.Name}</td>
                      <td key="15">{record.t.Name}</td>
                      <td key="16">{record.t.Name}</td>
                      <td key="17">{record.t.Name}</td>
                      <td key="18">
                              <Link
                                to={`/viewtransportinstructiontermstype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportinstructiontermstypes/${record._id}`}
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
export default Transportinstructiontermstypes;
