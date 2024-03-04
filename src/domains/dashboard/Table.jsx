import { action } from "../../assets";
import "./table.css";

const Table = () => {
  // Sample data for jobs
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "New York",
      postedDate: "2024-03-04",
    },
    {
      id: 2,
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco",
      postedDate: "2024-03-03",
    },
    {
      id: 3,
      title: "HR Specialist",
      department: "Human Resources",
      location: "Chicago",
      postedDate: "2024-03-02",
    },
    {
      id: 4,
      title: "Frontend Engineer",
      department: "Product",
      location: "Chicago",
      postedDate: "2024-03-02",
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Fintech",
      location: "Vizag",
      postedDate: "2024-03-02",
    },
    {
      id: 4,
      title: "Automation Tester",
      department: "Product",
      location: "Chicago",
      postedDate: "2024-03-02",
    },
    {
      id: 5,
      title: "Devops Engineer",
      department: "Fintech",
      location: "Vizag",
      postedDate: "2024-03-02",
    },
    {
      id: 5,
      title: "AWS Engineer",
      department: "Fintech",
      location: "Paris",
      postedDate: "2024-03-02",
    },
  ];

  return (
    <div className="container mt-2">
      <h4 className="mb-3">Job Listings</h4>
      <div className="table-responsive border-0">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Posted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.location}</td>
                <td>{job.postedDate}</td>
                <td>
                  <div className="dropdown">
                    <div
                      className="dropdown-toggle"
                      id={`dropdownMenuButton${job.id}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ textAlign: "center" }}
                    >
                      <img className="action_img" src={action} alt="" />
                    </div>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`dropdownMenuButton${job.id}`}
                    >
                      <li>
                        <button
                          className="dropdown-item text-info"
                          onClick={() => {}}
                        >
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => {}}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
