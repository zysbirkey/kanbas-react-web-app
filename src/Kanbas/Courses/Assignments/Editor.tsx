import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams(); // Get assignment ID from URL

  // Find the assignment from the database using the ID
  const assignment = assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found!</div>;
  }

    return (
      <div id="wd-assignments-editor" className="p-4">
        <label htmlFor="wd-name" className="form-label">
          <b>Assignment Name</b>
          </label>
          <input 
          id="wd-name" 
          value={assignment.title}
          className="form-control"
          />
        <br/ >
        <textarea 
          id="wd-description" 
          className="form-control" 
          value={assignment.description}
          cols={45} rows={9}>
        </textarea>
        
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td className="ps-3">
            <input id="wd-points" className="form-control" value={assignment.points} />
          </td>
        </tr>
        <br />
        {/* Complete on your own */}

<tr>
  <td align="right" valign="top">
    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
  </td>
  <td className="ps-3">
    <div className="border p-3"> 
      <div className="mb-3">
        <label htmlFor="wd-assign-to"><b>Assign to</b></label>
        <div className="form-control d-flex align-items-center" style={{ height: "auto" }}>
          
          <span className="badge bg-light text-dark px-3 py-2">Everyone 
            <button type="button" className="btn-close ms-2" aria-label="Close"></button>
          </span>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
        <div className="input-group">
          <input id="wd-due-date" type="text" className="form-control" value={assignment.dueDate} />
          <span className="input-group-text">
      <FaRegCalendarAlt /> 
    </span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
          <div className="input-group">
            <input id="wd-available-from" type="text" className="form-control" value={assignment.startDate} />
            <span className="input-group-text">
      <FaRegCalendarAlt /> 
    </span>
          </div>
        </div>
        <div className="col-md-6">
  <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
  <div className="input-group">
    <input id="wd-available-until" type="text" className="form-control" value={assignment.dueDate} />
    <span className="input-group-text">
      <FaRegCalendarAlt /> 
    </span>
  </div>
</div>
      </div>
    </div>
  </td>
</tr>

        </table>
        <hr />
        <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
);}

