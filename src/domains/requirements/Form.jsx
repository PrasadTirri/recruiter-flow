import "./JobPostingForm.css"; // Custom CSS file for additional styling

const JobPostingForm = () => {
  const inputFields = [
    {
      id: "businessUnit",
      label: "Business Unit",
      type: "select",
      options: ["Infoways"],
    },
    { id: "jobCode", label: "Job Code ", type: "text" },
    { id: "jobTitle", label: "Job Title ", type: "text" },
    {
      id: "currentSalary",
      label: "Current Bill Rate/Salary ",
      type: "number",
      suffix: "USD",
    },
    { id: "username", label: "Username", type: "text" },
    {
      id: "payRateSalary",
      label: "Pay Rate/Salary ",
      type: "number",
      suffix: "USD",
    },
    {
      id: "remoteJob",
      label: "Remote Job",
      type: "select",
      options: ["Yes", "No", "Hybrid"],
    },
    {
      id: "states",
      label: "States ",
      type: "select",
      options: ["State 1", "State 2", "State 3"],
    },
    { id: "location", label: "Location ", type: "text" },
    {
      id: "jobStatus",
      label: "Job Status ",
      type: "select",
      options: ["Active", "Inactive"],
    },
    {
      id: "jobType",
      label: "Job Type",
      type: "select",
      options: ["Full-time", "Part-time", "Contract"],
    },
    { id: "client", label: "Client ", type: "text" },
    { id: "clientManager", label: "Client Manager ", type: "text" },
    { id: "brNumber", label: "BR", type: "text" },
    { id: "duration", label: "Duration ", type: "text" },
    {
      id: "workAuthorization",
      label: "Work Authorization ",
      type: "select",
      options: ["Authorization 1", "Authorization 2"],
    },
    {
      id: "interviewMode",
      label: "Interview Mode ",
      type: "select",
      options: ["In-person", "Phone", "Video"],
    },
    { id: "primarySkills", label: "Primary Skills ", type: "text" },
    // Add more fields here
  ];

  return (
    <div className="container mb-5">
      <form className="mx-2 jobForm  px-5 rounded py-5">
        <h3 className="mb-5 text-center"> Job Requirements</h3>

        <div className="row ">
          {inputFields.map((field, index) => (
            <div className="col-md-4 col-sm-6 mb-3" key={field.id}>
              <div className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "select" && (
                  <select className="form-control" id={field.id}>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                )}
                {field.type === "multiselect" && (
                  <select className="form-control" id={field.id} multiple>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                )}
                {field.type !== "select" && field.type !== "multiselect" && (
                  <div className="input-group">
                    <input
                      type={field.type}
                      className="form-control"
                      id={field.id}
                      required
                    />
                    {field.suffix && (
                      <div className="input-group-append">
                        <span className="input-group-text">{field.suffix}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end w-100">
          <button type="submit" className="btn btn-primary w-30 mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
