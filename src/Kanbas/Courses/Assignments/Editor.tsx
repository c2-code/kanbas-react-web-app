export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={40} rows={10}>
            The assignment is available online Submit a link to the landing page of your Web application running on Netlify. THe landing page sould include the following: your full name and the section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />

        <table>
        <br />   
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
        <select id = "wd-group">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
          <option value="PROJECTS">Projects</option>
          </select>
          </td>
        </tr>
        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
        <select id = "wd-display-grade-as">
          <option value="Percentage">Percentage</option>
          <option value="Number">Number</option>
          </select>
          </td>
        </tr>
        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
        <select id = "wd-submission-type">
          <option value="Online">Online</option>
          <option value="Paper">Paper</option>
          </select>
          </td>
        </tr>
        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
        <select id = "wd-submission-type">
          <option value="Online">Online</option>
          <option value="Paper">Paper</option>
          </select>
          </td>
        </tr>
        <br/>
    
        <td align ="left" valign="top"> <br/>
        <label>Online Entry Options</label><br/>
        <tr>
        <input type="checkbox" name="check-entry-option" id="wd-text-entry"/>
        <label htmlFor="wd-text-entry"> Text Entry </label><br/>
        </tr>
        <tr>
        <input type="checkbox" name="check-entry-option" id="wd-website-url"/>
        <label htmlFor="wd-website-url"> Website URL </label><br/>
        </tr>
        <tr>
        <input type="checkbox" name="check-entry-option" id="wd-media-recordings"/>
        <label htmlFor="wd-media-recordings"> Media Recordings </label><br/>
        </tr>
        <tr>
        <input type="checkbox" name="check-entry-option" id="wd-student-annotation"/>
        <label htmlFor="wd-student-annotation"> Student Annotation </label><br/>
        </tr>
        <tr>
        <input type="checkbox" name="check-entry-option" id="wd-file-upload"/>
        <label htmlFor="wd-file-upload"> File Uploads </label><br/>
        </tr>
        <br/>
        </td>
        <br/>

        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label> <br/>
          <input type="string"
            placeholder="Everyone"
            value="Everyone"/><br/>
          </td>
          </tr>
          <br/>

        <tr>
          <br/>
          <td>
        <label htmlFor="wd-due-date">Due</label> <br/>
        <input type="date"
            id="wd-text-fields-dob"
            value="2024-05-13"/><br/>
          </td>
        </tr>
        <br/>

        <tr>
          <br/>
          <td>
        <label htmlFor="wd-available-from">Available From</label> <br/>
        <input type="date"
            id="wd-text-fields-dob"
            value="2024-05-06"/><br/>
          </td>
          <td>
        <label htmlFor="wd-available-until">Until</label> <br/>
        <input type="date"
            id="wd-text-fields-dob"
            value="2024-05-20"/><br/>
          </td>
        </tr>
        <br/>
      </table>
      <hr/>
      <table width = "100%"> 
        <td align = "right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
        </td>
    </table>
    </div>
);}
