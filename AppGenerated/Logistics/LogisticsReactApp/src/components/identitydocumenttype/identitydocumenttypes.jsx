import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getIdentitydocumenttypes, deleteIdentitydocumenttype } from "../../services/identitydocumenttypeService";

class Identitydocumenttypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:identitydocumenttypes } = await getIdentitydocumenttypes();
    this.setState({ records:identitydocumenttypes });
  }

  handleDelete = async id => {
    const allidentitydocumenttypes = this.state.records; 
    const identitydocumenttypes = allidentitydocumenttypes.filter(m => m._id !== id);
    this.setState({ records:identitydocumenttypes });
    try {
      await deleteIdentitydocumenttype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allidentitydocumenttypes });
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

    const { totalCount, data: paginatedIdentitydocumenttypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/identitydocumenttypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Identitydocumenttype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} identitydocumenttypes</p>
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
                      Identity Document Number
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Identity Document Type
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Identity Document Issuer
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Identity Document Type
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedIdentitydocumenttypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.identityDocumentNumber}</td>
                      <td key="3">{record.identityDocumentType}</td>
                      <td key="4">{record.identityDocumentIssuer}</td>
                      <td key="5">{record.i.Name}</td>
                      <td key="6">
                              <Link
                                to={`/viewidentitydocumenttype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/identitydocumenttypes/${record._id}`}
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
export default Identitydocumenttypes;
