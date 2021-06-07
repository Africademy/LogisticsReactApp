import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getDangerousgoodsattributetypes, deleteDangerousgoodsattributetype } from "../../services/dangerousgoodsattributetypeService";

class Dangerousgoodsattributetypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:dangerousgoodsattributetypes } = await getDangerousgoodsattributetypes();
    this.setState({ records:dangerousgoodsattributetypes });
  }

  handleDelete = async id => {
    const alldangerousgoodsattributetypes = this.state.records; 
    const dangerousgoodsattributetypes = alldangerousgoodsattributetypes.filter(m => m._id !== id);
    this.setState({ records:dangerousgoodsattributetypes });
    try {
      await deleteDangerousgoodsattributetype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alldangerousgoodsattributetypes });
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

    const { totalCount, data: paginatedDangerousgoodsattributetypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/dangerousgoodsattributetypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Dangerousgoodsattributetype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} dangerousgoodsattributetypes</p>
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
                      Dangerous Goods Attribute Type Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Text
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Measurement
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Indicator
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Date Time
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Measurement
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Dangerous Goods Attribute Type Code
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDangerousgoodsattributetypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.dangerousGoodsAttributeTypeCode}</td>
                      <td key="3">{record.dangerousGoodsAttributeText}</td>
                      <td key="4">{record.dangerousGoodsAttributeMeasurement}</td>
                      <td key="5">{record.dangerousGoodsAttributeIndicator}</td>
                      <td key="6">{record.dangerousGoodsAttributeDateTime}</td>
                      <td key="7">{record.d.Name}</td>
                      <td key="8">{record.d.Name}</td>
                      <td key="9">
                              <Link
                                to={`/viewdangerousgoodsattributetype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/dangerousgoodsattributetypes/${record._id}`}
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
export default Dangerousgoodsattributetypes;
