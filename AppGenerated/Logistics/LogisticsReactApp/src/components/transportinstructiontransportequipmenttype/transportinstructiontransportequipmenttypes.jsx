import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportinstructiontransportequipmenttypes, deleteTransportinstructiontransportequipmenttype } from "../../services/transportinstructiontransportequipmenttypeService";

class Transportinstructiontransportequipmenttypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportinstructiontransportequipmenttypes } = await getTransportinstructiontransportequipmenttypes();
    this.setState({ records:transportinstructiontransportequipmenttypes });
  }

  handleDelete = async id => {
    const alltransportinstructiontransportequipmenttypes = this.state.records; 
    const transportinstructiontransportequipmenttypes = alltransportinstructiontransportequipmenttypes.filter(m => m._id !== id);
    this.setState({ records:transportinstructiontransportequipmenttypes });
    try {
      await deleteTransportinstructiontransportequipmenttype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportinstructiontransportequipmenttypes });
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

    const { totalCount, data: paginatedTransportinstructiontransportequipmenttypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportinstructiontransportequipmenttypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportinstructiontransportequipmenttype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportinstructiontransportequipmenttypes</p>
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
                      Transport Equipment Weight
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Transport Equipment Provider Party Role
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Pick Up Location
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Return Location
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Transport Seal
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Transport Equipment Type Code
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Returnable Asset Type Identification
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Individual Returnable Asset Identification
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Individual Asset Identification
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Dimension
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Pick Up Location
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Return Location
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Transport Equipment Weight
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Transport Seal
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Transport Equipment Provider Party Role
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Transport Equipment Type Code
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Individual Asset Identification
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Returnable Asset Type Identification
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Individual Returnable Asset Identification
                    </th>
                    <th scope="col" key="22" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportinstructiontransportequipmenttypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.transportEquipmentWeight}</td>
                      <td key="3">{record.transportEquipmentProviderPartyRole}</td>
                      <td key="4">{record.pickUpLocation}</td>
                      <td key="5">{record.returnLocation}</td>
                      <td key="6">{record.transportSeal}</td>
                      <td key="7">{record.dimension}</td>
                      <td key="8">{record.transportEquipmentTypeCode}</td>
                      <td key="9">{record.returnableAssetTypeIdentification}</td>
                      <td key="10">{record.individualReturnableAssetIdentification}</td>
                      <td key="11">{record.individualAssetIdentification}</td>
                      <td key="12">{record.d.Name}</td>
                      <td key="13">{record.p.Name}</td>
                      <td key="14">{record.r.Name}</td>
                      <td key="15">{record.t.Name}</td>
                      <td key="16">{record.t.Name}</td>
                      <td key="17">{record.t.Name}</td>
                      <td key="18">{record.t.Name}</td>
                      <td key="19">{record.i.Name}</td>
                      <td key="20">{record.r.Name}</td>
                      <td key="21">{record.i.Name}</td>
                      <td key="22">
                              <Link
                                to={`/viewtransportinstructiontransportequipmenttype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportinstructiontransportequipmenttypes/${record._id}`}
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
export default Transportinstructiontransportequipmenttypes;
