import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDeliverytermslocations, deleteDeliverytermslocation } from "../../services/deliverytermslocationService";

class Deliverytermslocations extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:deliverytermslocations } = await getDeliverytermslocations();
    this.setState({ records:deliverytermslocations });
  }

  handleDelete = async id => {
    const alldeliverytermslocations = this.state.records; 
    const deliverytermslocations = alldeliverytermslocations.filter(m => m._id !== id);
    this.setState({ records:deliverytermslocations });
    try {
      await deleteDeliverytermslocation(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldeliverytermslocations });
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

    const { totalCount, data: paginatedDeliverytermslocations } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/deliverytermslocations/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Deliverytermslocation
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} deliverytermslocations</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Gln
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      Sublocation Identification
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Location Name
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Utc Offset
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDeliverytermslocations.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.gln}</td>
                      <td key="2">{record.sublocationIdentification}</td>
                      <td key="3">{record.locationName}</td>
                      <td key="4">{record.utcOffset}</td>
                      <td key="5">
                              <Link
                                to={`/viewdeliverytermslocation/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/deliverytermslocations/${record._id}`}
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
export default Deliverytermslocations;
