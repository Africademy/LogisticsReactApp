import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDimensiontypes, deleteDimensiontype } from "../../services/dimensiontypeService";

class Dimensiontypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:dimensiontypes } = await getDimensiontypes();
    this.setState({ records:dimensiontypes });
  }

  handleDelete = async id => {
    const alldimensiontypes = this.state.records; 
    const dimensiontypes = alldimensiontypes.filter(m => m._id !== id);
    this.setState({ records:dimensiontypes });
    try {
      await deleteDimensiontype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldimensiontypes });
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

    const { totalCount, data: paginatedDimensiontypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/dimensiontypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Dimensiontype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} dimensiontypes</p>
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
                      Depth
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Height
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Width
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Depth
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Height
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Width
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDimensiontypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.depth}</td>
                      <td key="3">{record.height}</td>
                      <td key="4">{record.width}</td>
                      <td key="5">{record.d.Name}</td>
                      <td key="6">{record.h.Name}</td>
                      <td key="7">{record.w.Name}</td>
                      <td key="8">
                              <Link
                                to={`/viewdimensiontype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/dimensiontypes/${record._id}`}
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
export default Dimensiontypes;
