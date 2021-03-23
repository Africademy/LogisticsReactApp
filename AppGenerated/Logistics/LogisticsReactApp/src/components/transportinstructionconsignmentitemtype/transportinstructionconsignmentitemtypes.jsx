import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getTransportinstructionconsignmentitemtypes, deleteTransportinstructionconsignmentitemtype } from "../../services/transportinstructionconsignmentitemtypeService";

class Transportinstructionconsignmentitemtypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:transportinstructionconsignmentitemtypes } = await getTransportinstructionconsignmentitemtypes();
    this.setState({ records:transportinstructionconsignmentitemtypes });
  }

  handleDelete = async id => {
    const alltransportinstructionconsignmentitemtypes = this.state.records; 
    const transportinstructionconsignmentitemtypes = alltransportinstructionconsignmentitemtypes.filter(m => m._id !== id);
    this.setState({ records:transportinstructionconsignmentitemtypes });
    try {
      await deleteTransportinstructionconsignmentitemtype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportinstructionconsignmentitemtypes });
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

    const { totalCount, data: paginatedTransportinstructionconsignmentitemtypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/transportinstructionconsignmentitemtypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Transportinstructionconsignmentitemtype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} transportinstructionconsignmentitemtypes</p>
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
                      Line Item Number
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Parent Line Item Number
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Note
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Transport Cargo Characteristics
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Package Total
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Logistic Unit
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Referenced Transport Equipment
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Transport Reference
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Handling Instruction
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Dangerous Goods Information
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Avp List
                    </th>
                    <th scope="col" key="13" style={{ cursor: "pointer" }}>
                      Dangerous Goods Information
                    </th>
                    <th scope="col" key="14" style={{ cursor: "pointer" }}>
                      Note
                    </th>
                    <th scope="col" key="15" style={{ cursor: "pointer" }}>
                      Avp List
                    </th>
                    <th scope="col" key="16" style={{ cursor: "pointer" }}>
                      Logistic Unit
                    </th>
                    <th scope="col" key="17" style={{ cursor: "pointer" }}>
                      Package Total
                    </th>
                    <th scope="col" key="18" style={{ cursor: "pointer" }}>
                      Transport Cargo Characteristics
                    </th>
                    <th scope="col" key="19" style={{ cursor: "pointer" }}>
                      Referenced Transport Equipment
                    </th>
                    <th scope="col" key="20" style={{ cursor: "pointer" }}>
                      Transport Reference
                    </th>
                    <th scope="col" key="21" style={{ cursor: "pointer" }}>
                      Handling Instruction
                    </th>
                    <th scope="col" key="22" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransportinstructionconsignmentitemtypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.lineItemNumber}</td>
                      <td key="3">{record.parentLineItemNumber}</td>
                      <td key="4">{record.note}</td>
                      <td key="5">{record.transportCargoCharacteristics}</td>
                      <td key="6">{record.packageTotal}</td>
                      <td key="7">{record.logisticUnit}</td>
                      <td key="8">{record.referencedTransportEquipment}</td>
                      <td key="9">{record.transportReference}</td>
                      <td key="10">{record.handlingInstruction}</td>
                      <td key="11">{record.dangerousGoodsInformation}</td>
                      <td key="12">{record.avpList}</td>
                      <td key="13">{record.d.Name}</td>
                      <td key="14">{record.n.Name}</td>
                      <td key="15">{record.a.Name}</td>
                      <td key="16">{record.l.Name}</td>
                      <td key="17">{record.p.Name}</td>
                      <td key="18">{record.t.Name}</td>
                      <td key="19">{record.r.Name}</td>
                      <td key="20">{record.t.Name}</td>
                      <td key="21">{record.h.Name}</td>
                      <td key="22">
                              <Link
                                to={`/viewtransportinstructionconsignmentitemtype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/transportinstructionconsignmentitemtypes/${record._id}`}
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
export default Transportinstructionconsignmentitemtypes;
