import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportcargocharacteristicstypes, deleteTransportcargocharacteristicstype } from "../../services/transportcargocharacteristicstypeService";

class Transportcargocharacteristicstypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportcargocharacteristicstypes } = await getTransportcargocharacteristicstypes();
    this.setState({ records:transportcargocharacteristicstypes });
  }

  handleDelete = async id => {
    const alltransportcargocharacteristicstypes = this.state.records; 
    const transportcargocharacteristicstypes = alltransportcargocharacteristicstypes.filter(m => m._id !== id);
    this.setState({ records:transportcargocharacteristicstypes });
    try {
      await deleteTransportcargocharacteristicstype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportcargocharacteristicstypes });
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

    const { totalCount, data: paginatedTransportcargocharacteristicstypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportcargocharacteristicstypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportcargocharacteristicstype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportcargocharacteristicstypes</p>
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
                      Cargo Type Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Harmonized System Code
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Cargo Type Description
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Country Of Origin Code
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Final Destination Country
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Total Gross Volume
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Total Gross Weight
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Total Transport Net Weight
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Total Chargeable Weight
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Declared Weight For Customs
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Total Loading Length
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Associated Invoice Amount
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Declared Value For Customs
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Total Package Quantity
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Total Item Quantity
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportcargocharacteristicstypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.cargoTypeCode}</td>
                      <td key="3">{record.harmonizedSystemCode}</td>
                      <td key="4">{record.cargoTypeDescription}</td>
                      <td key="5">{record.countryOfOriginCode}</td>
                      <td key="6">{record.finalDestinationCountry}</td>
                      <td key="7">{record.totalGrossVolume}</td>
                      <td key="8">{record.totalGrossWeight}</td>
                      <td key="9">{record.totalTransportNetWeight}</td>
                      <td key="10">{record.totalChargeableWeight}</td>
                      <td key="11">{record.declaredWeightForCustoms}</td>
                      <td key="12">{record.totalLoadingLength}</td>
                      <td key="13">{record.associatedInvoiceAmount}</td>
                      <td key="14">{record.declaredValueForCustoms}</td>
                      <td key="15">{record.totalPackageQuantity}</td>
                      <td key="16">{record.totalItemQuantity}</td>
                      <td key="17">
                              <Link
                                to={`/viewtransportcargocharacteristicstype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportcargocharacteristicstypes/${record._id}`}
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
export default Transportcargocharacteristicstypes;
