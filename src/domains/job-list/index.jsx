import Table from "../dashboard/Table";

const JobList = () => {
  return (
    <div className="container-fluid p-3">
      <div className="row mb-4">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
