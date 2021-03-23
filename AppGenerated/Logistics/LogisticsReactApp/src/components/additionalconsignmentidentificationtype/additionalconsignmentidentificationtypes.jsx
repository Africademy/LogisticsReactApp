import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getAdditionalconsignmentidentificationtypes, deleteAdditionalconsignmentidentificationtype } from "../../services/additionalconsignmentidentificationtypeService";

class Additionalconsignmentidentificationtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:additionalconsignmentidentificationtypes } = await getAdditionalconsignmentidentificationtypes();
    this.setState({ records:additionalconsignmentidentificationtypes });
  }

  handleDelete = async id => {
    const alladditionalconsignmentidentificationtypes = this.state.records; 
    const additionalconsignmentidentificationtypes = alladditionalconsignmentidentificationtypes.filter(m => m._id !== id);
    this.setState({ records:additionalconsignmentidentificationtypes });
    try {
      await deleteAdditionalconsignmentidentificationtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alladditionalconsignmentidentificationtypes });
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

    const { totalCount, data: paginatedAdditionalconsignmentidentificationtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/additionalconsignmentidentificationtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Additionalconsignmentidentificationtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} additionalconsignmentidentificationtypes</p>
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
                       String80 Type
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Additional Consignment Identification Type Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Code List Version
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedAdditionalconsignmentidentificationtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.String80Type}</td>
                      <td key="3">{record.additionalConsignmentIdentificationTypeCode}</td>
                      <td key="4">{record.codeListVersion}</td>
                      <td key="5">
                              <Link
                                to={`/viewadditionalconsignmentidentificationtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/additionalconsignmentidentificationtypes/${record._id}`}
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
export default Additionalconsignmentidentificationtypes;
