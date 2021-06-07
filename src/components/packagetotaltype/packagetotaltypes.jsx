import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getPackagetotaltypes, deletePackagetotaltype } from "../../services/packagetotaltypeService";

class Packagetotaltypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:packagetotaltypes } = await getPackagetotaltypes();
    this.setState({ records:packagetotaltypes });
  }

  handleDelete = async id => {
    const allpackagetotaltypes = this.state.records; 
    const packagetotaltypes = allpackagetotaltypes.filter(m => m._id !== id);
    this.setState({ records:packagetotaltypes });
    try {
      await deletePackagetotaltype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allpackagetotaltypes });
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

    const { totalCount, data: paginatedPackagetotaltypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/packagetotaltypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Packagetotaltype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} packagetotaltypes</p>
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
                      Package Type Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Total Package Quantity
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Total Gross Volume
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Total Gross Weight
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Returnable Packaging
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Total Gross Volume
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Total Gross Weight
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Returnable Packaging
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Package Type Code
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPackagetotaltypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.packageTypeCode}</td>
                      <td key="3">{record.totalPackageQuantity}</td>
                      <td key="4">{record.totalGrossVolume}</td>
                      <td key="5">{record.totalGrossWeight}</td>
                      <td key="6">{record.returnablePackaging}</td>
                      <td key="7">{record.t.Name}</td>
                      <td key="8">{record.t.Name}</td>
                      <td key="9">{record.r.Name}</td>
                      <td key="10">{record.p.Name}</td>
                      <td key="11">
                              <Link
                                to={`/viewpackagetotaltype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/packagetotaltypes/${record._id}`}
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
export default Packagetotaltypes;
