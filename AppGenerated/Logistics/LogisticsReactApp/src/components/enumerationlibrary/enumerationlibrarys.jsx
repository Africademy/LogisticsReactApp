import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getEnumerationlibrarys, deleteEnumerationlibrary } from "../../services/enumerationlibraryService";

class Enumerationlibrarys extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:enumerationlibrarys } = await getEnumerationlibrarys();
    this.setState({ records:enumerationlibrarys });
  }

  handleDelete = async id => {
    const allenumerationlibrarys = this.state.records; 
    const enumerationlibrarys = allenumerationlibrarys.filter(m => m._id !== id);
    this.setState({ records:enumerationlibrarys });
    try {
      await deleteEnumerationlibrary(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allenumerationlibrarys });
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

    const { totalCount, data: paginatedEnumerationlibrarys } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/enumerationlibrarys/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Enumerationlibrary
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} enumerationlibrarys</p>
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
                      Semantic Resource U R N
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                       Code Value
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Resource Sub Type Code
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                       Code List
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                       Domain
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                       External Link
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Code Name
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                       Definition
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Change Log
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                       Status
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                       Version
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                       Change Date
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Change Log Comment
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedEnumerationlibrarys.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.semanticResourceURN}</td>
                      <td key="3">{record.CodeValue}</td>
                      <td key="4">{record.resourceSubTypeCode}</td>
                      <td key="5">{record.CodeList}</td>
                      <td key="6">{record.Domain}</td>
                      <td key="7">{record.ExternalLink}</td>
                      <td key="8">{record.codeName}</td>
                      <td key="9">{record.Definition}</td>
                      <td key="10">{record.changeLog}</td>
                      <td key="11">{record.Status}</td>
                      <td key="12">{record.Version}</td>
                      <td key="13">{record.ChangeDate}</td>
                      <td key="14">{record.changeLogComment}</td>
                      <td key="15">
                              <Link
                                to={`/viewenumerationlibrary/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/enumerationlibrarys/${record._id}`}
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
export default Enumerationlibrarys;
