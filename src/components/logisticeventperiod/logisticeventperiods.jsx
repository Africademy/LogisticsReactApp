import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getLogisticeventperiods, deleteLogisticeventperiod } from "../../services/logisticeventperiodService";

class Logisticeventperiods extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:logisticeventperiods } = await getLogisticeventperiods();
    this.setState({ records:logisticeventperiods });
  }

  handleDelete = async id => {
    const alllogisticeventperiods = this.state.records; 
    const logisticeventperiods = alllogisticeventperiods.filter(m => m._id !== id);
    this.setState({ records:logisticeventperiods });
    try {
      await deleteLogisticeventperiod(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alllogisticeventperiods });
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

    const { totalCount, data: paginatedLogisticeventperiods } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/logisticeventperiods/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Logisticeventperiod
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} logisticeventperiods</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                      Begin Date
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                      Begin Time
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      End Date
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      End Time
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLogisticeventperiods.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.beginDate}</td>
                      <td key="2">{record.beginTime}</td>
                      <td key="3">{record.endDate}</td>
                      <td key="4">{record.endTime}</td>
                      <td key="5">
                              <Link
                                to={`/viewlogisticeventperiod/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/logisticeventperiods/${record._id}`}
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
export default Logisticeventperiods;
