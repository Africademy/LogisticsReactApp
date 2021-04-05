import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getPackagingmarkingtypes, deletePackagingmarkingtype } from "../../services/packagingmarkingtypeService";

class Packagingmarkingtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:packagingmarkingtypes } = await getPackagingmarkingtypes();
    this.setState({ records:packagingmarkingtypes });
  }

  handleDelete = async id => {
    const allpackagingmarkingtypes = this.state.records; 
    const packagingmarkingtypes = allpackagingmarkingtypes.filter(m => m._id !== id);
    this.setState({ records:packagingmarkingtypes });
    try {
      await deletePackagingmarkingtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allpackagingmarkingtypes });
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

    const { totalCount, data: paginatedPackagingmarkingtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/packagingmarkingtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Packagingmarkingtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} packagingmarkingtypes</p>
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
                      Marking Type Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Marking Content Date Time
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Marking Content Text
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Marking Type Code
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPackagingmarkingtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.markingTypeCode}</td>
                      <td key="3">{record.markingContentDateTime}</td>
                      <td key="4">{record.markingContentText}</td>
                      <td key="5">{record.m.Name}</td>
                      <td key="6">
                              <Link
                                to={`/viewpackagingmarkingtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/packagingmarkingtypes/${record._id}`}
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
export default Packagingmarkingtypes;
