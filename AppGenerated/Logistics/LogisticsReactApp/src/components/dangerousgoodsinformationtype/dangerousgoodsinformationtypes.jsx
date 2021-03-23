import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDangerousgoodsinformationtypes, deleteDangerousgoodsinformationtype } from "../../services/dangerousgoodsinformationtypeService";

class Dangerousgoodsinformationtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:dangerousgoodsinformationtypes } = await getDangerousgoodsinformationtypes();
    this.setState({ records:dangerousgoodsinformationtypes });
  }

  handleDelete = async id => {
    const alldangerousgoodsinformationtypes = this.state.records; 
    const dangerousgoodsinformationtypes = alldangerousgoodsinformationtypes.filter(m => m._id !== id);
    this.setState({ records:dangerousgoodsinformationtypes });
    try {
      await deleteDangerousgoodsinformationtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldangerousgoodsinformationtypes });
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

    const { totalCount, data: paginatedDangerousgoodsinformationtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/dangerousgoodsinformationtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Dangerousgoodsinformationtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} dangerousgoodsinformationtypes</p>
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
                      Dangerous Goods U N Identifier
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Dangerous Goods Shipping Name
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Dangerous Goods Technical Name
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Dangerous Goods Description
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Contact
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Dangerous Goods Regulation Information
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Contact
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Dangerous Goods Regulation Information
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Dangerous Goods Description
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Dangerous Goods Shipping Name
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Dangerous Goods Technical Name
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Dangerous Goods U N Identifier
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDangerousgoodsinformationtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.dangerousGoodsUNIdentifier}</td>
                      <td key="3">{record.dangerousGoodsShippingName}</td>
                      <td key="4">{record.dangerousGoodsTechnicalName}</td>
                      <td key="5">{record.dangerousGoodsDescription}</td>
                      <td key="6">{record.contact}</td>
                      <td key="7">{record.dangerousGoodsRegulationInformation}</td>
                      <td key="8">{record.c.Name}</td>
                      <td key="9">{record.d.Name}</td>
                      <td key="10">{record.d.Name}</td>
                      <td key="11">{record.d.Name}</td>
                      <td key="12">{record.d.Name}</td>
                      <td key="13">{record.d.Name}</td>
                      <td key="14">
                              <Link
                                to={`/viewdangerousgoodsinformationtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/dangerousgoodsinformationtypes/${record._id}`}
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
export default Dangerousgoodsinformationtypes;
