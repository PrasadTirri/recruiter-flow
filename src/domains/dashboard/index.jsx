import {
  applicationsIcon,
  graphIcon,
  timerIcon,
  usersIcon,
} from "../../assets";
import "./styles.css";
import Table from "./Table";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="row text-center mb-3">
          {/* Job Views Card */}
          <div className="col-md-3 mb-3">
            <div className="card  jobs_view">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={usersIcon} alt="" />
                  </div>
                  <div className="col-8">
                    <h6 className="card-title text-secondary">
                      Total Profiles
                    </h6>
                    <h3 className="card-text">19,345 </h3>
                    <span className="text-success smallText">+10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Applications Card */}
          <div className="col-md-3 mb-3">
            <div className="card jobs_application">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={graphIcon} alt="" />
                  </div>
                  <div className="col-8">
                    <h6 className="card-title text-secondary">Jobs views</h6>
                    <h3 className="card-text">19,345 </h3>
                    <span className="text-success smallText">+10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card approved">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={applicationsIcon} alt="" />
                  </div>
                  <div className="col-8">
                    <h6 className="card-title text-secondary">Applications</h6>
                    <h3 className="card-text">19,345 </h3>
                    <span className="text-success smallText">+10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approved CVs Card */}
          <div className="col-md-3 mb-3">
            <div className="card rejected">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <img src={timerIcon} alt="" />
                  </div>
                  <div className="col-8">
                    <h6 className="card-title text-secondary">
                      Pending Profiles
                    </h6>
                    <h3 className="card-text">19,345 </h3>
                    <span className="text-success smallText">+10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <Table />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* Latest Profiles */}
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-secondary">Latest Profiles</h6>
                {/* List group with custom content */}
                <div className="list-group">
                  {/* Individual item */}
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start py-3"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Guy Hawkins</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Interpreter & Translator</p>
                    <small>PayPal Inc.</small>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start py-3"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">John Smith</h5>
                      <small>5 days ago</small>
                    </div>
                    <p className="mb-1">Software Engineer</p>
                    <small>Iznes .</small>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start py-3"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Python King</h5>
                      <small>5 days ago</small>
                    </div>
                    <p className="mb-1">Software Engineer</p>
                    <small>Iznes .</small>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start py-3"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Js Master</h5>
                      <small>5 days ago</small>
                    </div>
                    <p className="mb-1">Software Engineer</p>
                    <small>Iznes .</small>
                  </a>
                  {/* Repeat for other profiles */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Further rows and cards as needed */}
      </div>
    </>
  );
}

export default Dashboard;
