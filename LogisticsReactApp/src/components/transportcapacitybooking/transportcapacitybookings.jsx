import {} from "./transportcapacitybookingForm.css";
import React, { Component } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CLabel,
  CRow,
} from "@coreui/react";
import {
  getTransportcapacitybookings,
  filterTransportcapacitybooking,
  deleteTransportcapacitybooking,
} from "../../services/transportcapacitybookingService";
import Moment from "moment";
import { data } from "jquery";

class Transportcapacitybookings extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      records: [],
      pageSize: 5,
      currentPage: 1,
    };
  }

  fields = [
    { key: "bookingId", label: "Booking ID", _style: { width: "auto" } },
    {
      key: "plannedPickUp.LogisticEventPeriod.beginDate",
      label: "From",
      _style: { width: "auto" },
    },
    {
      key: "plannedPickUp.LogisticEventPeriod.endDate",
      label: "To",
      _style: { width: "auto" },
    },
    {
      key: "transportServiceConditionTypeCode.Name",
      label: "Type",
      _style: { width: "auto" },
    },
    {
      key: "transportServiceLevelCode.Name",
      label: "Service Level",
      _style: { width: "auto" },
    },
    {
      key: "transportServiceCategoryCode.Name",
      label: "Service Code",
      _style: { width: "auto" },
    },
    {
      key:
        "transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Value",
      label: "Total Weight",
      _style: { width: "auto" },
    },
    {
      key: "plannedDropOff.LogisticEventPeriod.endDate",
      label: "Due",
      _style: { width: "auto" },
    },
    {
      key: "action",
      label: "Action",
      _style: { width: "auto" },
      sorter: false,
      filter: false,
    },
  ];

  getBadge = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Inprogress":
        return "secondary";
      case "Pending":
        return "warning";
      case "Cancelled":
        return "danger";
      default:
        return "primary";
    }
  };

  componentDidMount = async () => {
    const {
      data: transportcapacitybookings,
    } = await getTransportcapacitybookings();
    console.log(transportcapacitybookings,"array list")
    this.setState({ records: transportcapacitybookings });
  };

  handleDelete = async (id) => {
    const alltransportcapacitybookings = this.state.records;
    const transportcapacitybookings = alltransportcapacitybookings.filter(
      (m) => m._id !== id
    );
    this.setState({ records: transportcapacitybookings });
    try {
      await deleteTransportcapacitybooking(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("The record has already been deleted");
      }
      this.setState({ records: alltransportcapacitybookings });
    }
  };

  handlePageChange = (pageNo) => {
    this.setState({ currentPage: pageNo });
  };

  getPagedData = () => {
    const { pageSize, currentPage, records } = this.state;
    const paginatedRecords = paginate(records, currentPage, pageSize);
    return {
      totalCount: !records.length ? 0 : records.length,
      data: paginatedRecords,
    };
  };

  handleInputChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: data });
    // if (e.currentTarget.name === "bookingid" && e.currentTarget.value === "") {
    //   this.componentDidMount();
    // }
  };

  handleGetBooking = async (e) => {
    e.preventDefault();
    let singletransportbooking = [];
    var data = { ...this.state.data };
    console.log(data);

    data["bookingid"] = data.bookingid ? data.bookingid : false;
    data.fromdate = data.fromdate ? new Date(data.fromdate).getTime() : "";
    data.todate = data.todate ? new Date(data.todate).getTime() : "";
    // data = JSON.stringify(data);
    console.log(data);
    try {
      let res = await filterTransportcapacitybooking(data);
      console.log(res.data);
      singletransportbooking = res.data;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.error(err);
      }
    } finally {
      singletransportbooking =
        singletransportbooking.length > 0
          ? singletransportbooking
          : this.getPagedData().data;

      this.setState({
        records: singletransportbooking,
      });
    }
  };

  formatDate = (d) => {
    return Moment(d).format("DD-MM-YYYY hh:mm");
  };

  render() {
    const {
      totalCount,
      data: paginatedTransportcapacitybookings,
    } = this.getPagedData();

    return (
      <React.Fragment>
        <CRow>
          {totalCount === 0 ? (
            <CCol md="6">
              <div className="text-muted text">
                <p>There are no records to show create a record</p>
              </div>
            </CCol>
          ) : (
            <CCol md="6">
              <div className="text-muted text">
                <p>There are {totalCount} Transport Capacity Bookings</p>
              </div>
            </CCol>
          )}
          <CCol md="6">
            <Link to="/transportcapacitybookings/newui">
              <CButton className="btn btn-outline-info custom-btn float-right">
                New Booking
              </CButton>
            </Link>
          </CCol>
        </CRow>

        <CCard className="shadow-sm my-2">
          <CCardBody>
            <div className="search-booking-details">
              <CForm onSubmit={this.handleGetBooking}>
                <CRow>
                  <CCol md="5">
                    <CFormGroup>
                      <CLabel htmlFor="bookingid">Booking ID</CLabel>
                      <CInputGroup>
                        <CInput
                          id="bookingid"
                          name="bookingid"
                          placeholder="Booking Id"
                          type="text"
                          className="form-control"
                          autocomplete="off"
                          onChange={this.handleInputChange}
                        />
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol md="3">
                    <CFormGroup>
                      <CLabel htmlFor="fromdate">From</CLabel>
                      <CInputGroup>
                        <CInput
                          id="fromdate"
                          name="fromdate"
                          placeholder="From"
                          type="date"
                          className="form-control"
                          onChange={this.handleInputChange}
                        />
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol md="3">
                    <CFormGroup>
                      <CLabel htmlFor="todate">To</CLabel>
                      <CInputGroup>
                        <CInput
                          id="todate"
                          name="todate"
                          placeholder="To"
                          type="date"
                          className="form-control"
                          onChange={this.handleInputChange}
                        />
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol md="1">
                    <CFormGroup>
                      <CLabel htmlFor="todate" className="text-white">
                        Submit
                      </CLabel>
                      <CButton
                        type="submit"
                       
                        className="btn btn-info custom-btn float-right"
                      >
                        Go
                      </CButton>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CForm>
            </div>
          </CCardBody>
        </CCard>

        <div className="bookings-list card card-body my-2">
          <CDataTable
            items={this.state.records}
            fields={this.fields}
            tableFilter
            itemsPerPageSelect
            itemsPerPage={this.state.pageSize}
            hover
            sorter
            border
            pagination
            scopedSlots={{
              bookingId: (item) => {
                return (
                  <td>
                    <Link to={`/viewtransportcapacitybooking/${item._id}`}>
                      {item.bookingId}
                    </Link>
                  </td>
                );
              },
              status: (item) => {
                return (
                  <td>
                    <CBadge color={this.getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                );
              },
              "plannedPickUp.LogisticEventPeriod.beginDate": (item) => {
                return (
                  <td>
                    <span>
                      {this.formatDate(
                        item.plannedPickUp.LogisticEventPeriod.beginDate
                      )}
                    </span>
                    <small id="from-address" className="form-text text-muted">
                      {item.plannedPickUp.Logisticlocation.locationName}
                    </small>
                  </td>
                );
              },
              "plannedPickUp.LogisticEventPeriod.endDate": (item) => {
                return (
                  <td>
                    <span>
                      {this.formatDate(
                        item.plannedPickUp.LogisticEventPeriod.endDate
                      )}
                    </span>
                    <small id="to-address" className="form-text text-muted">
                      {item.plannedDropOff.Logisticlocation.locationName}
                    </small>
                  </td>
                );
              },
              "transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Value": (
                item
              ) => {
                return (
                  <td>
                    {
                      item.transportCapacityBookingSpaceRequirements
                        .Packagetotaltypes.totalGrossWeight.Value
                    }
                  </td>
                );
              },
              "plannedDropOff.LogisticEventPeriod.endDate": (item) => {
                return (
                  <td>
                    {this.formatDate(
                      item.plannedDropOff.LogisticEventPeriod.endDate
                    )}
                  </td>
                );
              },
              "transportServiceConditionTypeCode.Name": (item) => {
                return <td>{item.transportServiceConditionTypeCode.Name}</td>;
              },
              "transportServiceLevelCode.Name": (item) => {
                return <td>{item.transportServiceLevelCode.Name}</td>;
              },
              "transportServiceCategoryCode.Name": (item) => {
                return <td>{item.transportServiceCategoryCode.Name}</td>;
              },
              action: (item) => {
                return (
                  <td>
                    <div className="action-buttons text-center">
                      <Link
                        to={`/EditTransportcapacitybooking/${item._id}`}
                        className="btn btn-warning btn-sm mx-1 my-sm-1"
                        title="Edit"
                      >
                        <i className="cil-pencil"></i>
                      </Link>
                      <button
                        onClick={() => this.handleDelete(item._id)}
                        className="btn btn-danger btn-sm mx-1 my-sm-1"
                        title="Delete"
                      >
                        <i className="cil-trash"></i>
                      </button>
                    </div>
                  </td>
                );
              },
            }}
          />

          {/* <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Booking ID</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Type</th>
                  <th scope="col">Service Level</th>
                  <th scope="col">Service Code</th>
                  <th scope="col">Total Weight</th>
                  <th scope="col">Due</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransportcapacitybookings.map((record, i) => (
                  <tr key={i}>
                    <th scope="row">
                      <Link to={`/viewtransportcapacitybooking/${record._id}`}>
                        {record.bookingId}
                      </Link>
                    </th>
                    <td id="from-address">
                      <span>
                        {this.formatDate(
                          record.plannedPickUp.LogisticEventDateTime.date
                        )}
                      </span>
                      <small id="from-address" className="form-text text-muted">
                        {record.plannedPickUp.Logisticlocation.locationName}
                      </small>
                    </td>
                    <td id="to-address">
                      <span>
                        {this.formatDate(
                          record.plannedDropOff.LogisticEventDateTime.date
                        )}
                      </span>
                      <small id="to-address" className="form-text text-muted">
                        {record.plannedDropOff.Logisticlocation.locationName}
                      </small>
                    </td>
                    <td>{record.transportServiceConditionTypeCode.Name}</td>
                    <td>{record.transportServiceLevelCode.Name}</td>
                    <td>{record.transportServiceCategoryCode.Name}</td>
                    <td>
                      {
                        record.transportCapacityBookingSpaceRequirements
                          .Transportcargocharacteristicstypes.totalGrossWeight
                          .Value
                      }
                    </td>
                    <td>
                      {this.formatDate(
                        record.plannedDropOff.LogisticEventPeriod.endDate
                      )}
                    </td>
                    <td>
                      <div className="action-buttons text-center">
                        <Link
                          to={`/transportcapacitybookings/${record._id}`}
                          className="btn btn-warning btn-sm mx-1 my-sm-1"
                          title="Edit"
                        >
                          <i className="fa fa-pencil"></i>
                        </Link>
                        <button
                          onClick={() => this.handleDelete(record._id)}
                          className="btn btn-danger btn-sm mx-1 my-sm-1"
                          title="Delete"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          <span
            className="btn btn-link text-right"
            onClick={ ()=>this.setState(()=> this.state.pageSize =totalCount) }
          >
            See all
          </span>
        </div>
        {/* <Pagination
          itemsCount={totalCount}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        /> */}
      </React.Fragment>
    );
  }
}
export default Transportcapacitybookings;
