import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { getHandlinginstructiontypes, deleteHandlinginstructiontype } from "../../services/handlinginstructiontypeService";

class Handlinginstructiontypes extends Component{
  state = {
    records: [],
    pageSize: 20,
    currentPage: 1
  };

  async componentDidMount() {
    const { data:handlinginstructiontypes } = await getHandlinginstructiontypes();
    this.setState({ records:handlinginstructiontypes });
  }

  handleDelete = async id => {
    const allhandlinginstructiontypes = this.state.records; 
    const handlinginstructiontypes = allhandlinginstructiontypes.filter(m => m._id !== id);
    this.setState({ records:handlinginstructiontypes });
    try {
      await deleteHandlinginstructiontype(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
         console.log("The record has already been deleted");
      }
      this.setState({ records: allhandlinginstructiontypes });
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

    const { totalCount, data: paginatedHandlinginstructiontypes } = this.getPagedData();

    return (
      <React.Fragment>
            <div className="row mt-4">
              <div className="col-sm-5">
                    <Link
                      to="/handlinginstructiontypes/new"
                      className="btn btn-primary custom-btn"
                      style={{ marginBottom: 20 }}
                    >
                     New Handlinginstructiontype
                    </Link>
              </div>
              { (totalCount === 0)?
                <div className="col-sm-4">
                   <p>There are no records to show create a record</p>
                </div>
                : 
                <div className="col-sm-2">
                   <p>There are {totalCount} handlinginstructiontypes</p>
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
                      Handling Instruction Code
                    </th>
                    <th scope="col" key="3" style={{ cursor: "pointer" }}>
                      Handling Instruction Text
                    </th>
                    <th scope="col" key="4" style={{ cursor: "pointer" }}>
                      Printing Instruction Code
                    </th>
                    <th scope="col" key="5" style={{ cursor: "pointer" }}>
                      Storage Temperature
                    </th>
                    <th scope="col" key="6" style={{ cursor: "pointer" }}>
                      Transport Temperature
                    </th>
                    <th scope="col" key="7" style={{ cursor: "pointer" }}>
                      Handling Instruction Text
                    </th>
                    <th scope="col" key="8" style={{ cursor: "pointer" }}>
                      Storage Temperature
                    </th>
                    <th scope="col" key="9" style={{ cursor: "pointer" }}>
                      Transport Temperature
                    </th>
                    <th scope="col" key="10" style={{ cursor: "pointer" }}>
                      Handling Instruction Code
                    </th>
                    <th scope="col" key="11" style={{ cursor: "pointer" }}>
                      Printing Instruction Code
                    </th>
                    <th scope="col" key="12" style={{ cursor: "pointer" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedHandlinginstructiontypes.map(record => (
                    <tr key={record._id}>
                      <td key="1">{record.id}</td>
                      <td key="2">{record.handlingInstructionCode}</td>
                      <td key="3">{record.handlingInstructionText}</td>
                      <td key="4">{record.printingInstructionCode}</td>
                      <td key="5">{record.storageTemperature}</td>
                      <td key="6">{record.transportTemperature}</td>
                      <td key="7">{record.h.Name}</td>
                      <td key="8">{record.s.Name}</td>
                      <td key="9">{record.t.Name}</td>
                      <td key="10">{record.h.Name}</td>
                      <td key="11">{record.p.Name}</td>
                      <td key="12">
                              <Link
                                to={`/viewhandlinginstructiontype/${record._id}`}
                                className="btn btn-info btn-sm m-1"
                                >
                                View
                              </Link>
                              <Link
                                to={`/handlinginstructiontypes/${record._id}`}
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
export default Handlinginstructiontypes;
