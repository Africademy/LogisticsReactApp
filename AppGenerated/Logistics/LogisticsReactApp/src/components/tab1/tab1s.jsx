import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTab1s, deleteTab1 } from "../../services/tab1Service";

class Tab1s extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:tab1s } = await getTab1s();
    this.setState({ records:tab1s });
  }

  handleDelete = async id => {
    const alltab1s = this.state.records; 
    const tab1s = alltab1s.filter(m => m._id !== id);
    this.setState({ records:tab1s });
    try {
      await deleteTab1(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltab1s });
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

    const { totalCount, data: paginatedTab1s } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/tab1s/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Tab1
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} tab1s</p>
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
                      Intcol
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                       Var Char Col
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                       Date Time
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                       Float Col
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                       Time Col
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                       Decimal Col
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                       Medium Text Col
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Fk1
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Fk2s
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTab1s.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.intcol}</td>
                      <td key="3">{record.VarCharCol}</td>
                      <td key="4">{record.DateTime}</td>
                      <td key="5">{record.FloatCol}</td>
                      <td key="6">{record.TimeCol}</td>
                      <td key="7">{record.DecimalCol}</td>
                      <td key="8">{record.MediumTextCol}</td>
                      <td key="9">{record.f.Name}</td>
                      <td key="10">{record.fk2}</td>
                      <td key="11">
                              <Link
                                to={`/viewtab1/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/tab1s/${record._id}`}
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
export default Tab1s;
