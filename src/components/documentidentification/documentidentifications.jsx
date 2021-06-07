import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDocumentidentifications, deleteDocumentidentification } from "../../services/documentidentificationService";

class Documentidentifications extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:documentidentifications } = await getDocumentidentifications();
    this.setState({ records:documentidentifications });
  }

  handleDelete = async id => {
    const alldocumentidentifications = this.state.records; 
    const documentidentifications = alldocumentidentifications.filter(m => m._id !== id);
    this.setState({ records:documentidentifications });
    try {
      await deleteDocumentidentification(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldocumentidentifications });
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

    const { totalCount, data: paginatedDocumentidentifications } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/documentidentifications/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Documentidentification
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} documentidentifications</p>
                </div>
              }
          </div>
            <div className="table-responsive">

              <table className="table">
                <thead>
                    <tr>
                    <th scope="col" key="1" style={{ cursor: "pointer" }}>
                       Standard
                    </th>
                    <th scope="col" key="2" style={{ cursor: "pointer" }}>
                       Type Version
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                       Instance Identifier
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                       Type
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                       Multiple Type
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                       Creation Date And Time
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDocumentidentifications.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.Standard}</td>
                      <td key="2">{record.TypeVersion}</td>
                      <td key="3">{record.InstanceIdentifier}</td>
                      <td key="4">{record.Type}</td>
                      <td key="5">{record.MultipleType}</td>
                      <td key="6">{record.CreationDateAndTime}</td>
                      <td key="7">
                              <Link
                                to={`/viewdocumentidentification/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/documentidentifications/${record._id}`}
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
export default Documentidentifications;
