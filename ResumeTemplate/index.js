"use strict";

const add_certif = document.getElementById("add-certification");
const container = document.getElementById("certifications-container");
const add_project = document.getElementById("addProject");
const project = document.getElementById("project");
const add_experince = document.getElementById("add-experience");
const experience = document.getElementById("experience");
const add_education = document.getElementById("add-education");
const education = document.getElementById("education");
const addSkill = document.getElementById("add-skill");
const skills = document.getElementById("skills");
const skill = document.getElementById("skill");
let generate = document.getElementById("generate");

add_certif.onclick = () => {
  elements(
    "div",
    "form-grid",
    container,
    `
     <div>
        <label for="cert_name">Certification Name</label>
        <input type="text" name="cert_name" placeholder="AWS Certified Developer" />
      </div>
      <div>
        <label for="inst_name">Institution Name</label>
        <input type="text" name="inst_name" placeholder="Amazon" />
      </div>
      <div style="grid-column: 1 / -1;">
        <label for="key_point">Details</label>
        <textarea name="key_point" placeholder="Explain what you learned or achieved..." rows="3"></textarea>
      </div>
    `
  );
};

add_project.onclick = () => {
  elements(
    "div",
    "form-grid",
    project,
    `
    <div>
        <label for="project_name">Project Name</label>
        <input type="text" name="project_name" placeholder="E-commerce Website" />
    </div>
    <div>
        <label for="project_role">Your Role</label>
        <input type="text" name="project_role" placeholder="Frontend Developer" />
    </div>
    <div>
        <label for="project_tech">Technologies Used</label>
        <input type="text" name="project_tech" placeholder="React, Node.js, MongoDB" />
    </div>
    <div style="grid-column: 1 / -1">
        <label for="project_desc">Description</label>
        <textarea name="project_desc" placeholder="Describe the project..." rows="4"></textarea>
    </div>
    `
  );
};

add_experince.onclick = () => {
  elements(
    "div",
    "form-grid",
    experience,
    `
    <div>
        <label for="job_title">Job Title</label>
        <input type="text" name="job_title" placeholder="Software Engineer" />
    </div>
    <div>
        <label for="company_name">Company Name</label>
        <input type="text" name="company_name" placeholder="ABC Tech Pvt Ltd" />
    </div>
    <div>
        <label for="duration">Duration</label>
        <input type="text" name="duration" placeholder="Jan 2022 - Present" />
    </div>
    <div style="grid-column: 1 / -1">
        <label for="responsibilities">Responsibilities</label>
        <textarea name="responsibilities" placeholder="Mention your key responsibilities and achievements..." rows="4"></textarea>
    </div>
    `
  );
};

add_education.onclick = () => {
  elements(
    "div",
    "form-grid",
    education,
    `
    <div>
        <label for="education_type">Education Level</label>
        <select name="education_type">
            <option value="">Select Education</option>
            <option value="ssc">SSC</option>
            <option value="inter">Intermediate</option>
            <option value="graduation">Graduation</option>
            <option value="post_graduation">Post-Graduation</option>
        </select>
    </div>
    <div>
        <label for="education_group">Group / Stream</label>
        <select name="education_group">
            <option value="">Select Group</option>
            <optgroup label="Intermediate">
              <option value="mpc">MPC</option>
              <option value="bipc">BiPC</option>
              <option value="cec">CEC</option>
              <option value="mec">MEC</option>
              <option value="hec">HEC</option>
            </optgroup>
            <optgroup label="Graduation">
              <option value="bsc_cs">B.Sc Computer Science</option>
              <option value="bcom">B.Com</option>
              <option value="ba">B.A</option>
              <option value="btech_cse">B.Tech CSE</option>
              <option value="btech_ece">B.Tech ECE</option>
              <option value="bba">BBA</option>
            </optgroup>
            <optgroup label="Post-Graduation">
              <option value="msc_cs">M.Sc Computer Science</option>
              <option value="mcom">M.Com</option>
              <option value="ma">M.A</option>
              <option value="mtech_cse">M.Tech CSE</option>
              <option value="mba">MBA</option>
            </optgroup>
        </select>
    </div>
    <div>
        <label for="institute">Institute</label>
        <input type="text" name="institute" placeholder="University/School Name" />
    </div>
    <div>
        <label for="edu_year">Year of Passing</label>
        <input type="number" name="edu_year" placeholder="2022" />
    </div>
    `
  );
};

let elements = (tag, classList, addElement, section) => {
  const wrapper = document.createElement(tag);
  wrapper.classList.add(classList);

  // Create Delete Button
  const deleteBtn = createDeleteBtn();
  deleteBtn.onclick = () => {
    // Remove the <hr> before this wrapper and the wrapper itself
    if (
      wrapper.previousElementSibling &&
      wrapper.previousElementSibling.tagName === "HR"
    ) {
      wrapper.previousElementSibling.remove();
    }
    wrapper.remove();
  };

  wrapper.innerHTML = section;
  wrapper.prepend(deleteBtn);

  const hr = document.createElement("hr");
  addElement.appendChild(hr);
  addElement.appendChild(wrapper);
};

let createDeleteBtn = () => {
  const deleteBtn = document.createElement("a");
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.textContent = "X";
  return deleteBtn;
};

addSkill.onclick = () => {
  const value = skill.value.trim();
  addSkills(value);
};
let addSkills = (value) => {
  if (value) {
    const lang = document.createElement("p");
    lang.classList.add("lang");
    lang.textContent = value;

    const deleteBtn = createDeleteBtn();
    deleteBtn.onclick = () => {
      lang.remove();
    };

    lang.append(deleteBtn);
    skills.appendChild(lang);
    skill.value = "";
    skills.style.display = "block";
  }
};

generate.addEventListener("click", function (e) {
  e.preventDefault();
  debugger;
  const form = document.querySelector("form");
  const formData = new FormData(form);

  const data = {
    header: {},
    summary: "",
    certifications: [],
    lang: [],
    projects: [],
    experience: [],
    education: [],
  };

  // Header
  data.header.firstName = formData.get("firstName");
  data.header.lastName = formData.get("lastName");
  data.header.role = formData.get("role");
  data.header.email = formData.get("email");
  data.header.phone = formData.get("phone");
  data.header.linkedin = formData.get("linkedin");
  data.header.location = formData.get("location");

  // Summary
  data.summary = formData.get("summary");

  // Skills
  const skillElements = document.querySelectorAll("#skills .lang");

  const skillValues = Array.from(skillElements).map((el) => {
    return el.firstChild.textContent.trim();
  });
  data.lang = skillValues;

  // Certifications
  const cert_names = formData.getAll("cert_name");
  const inst_names = formData.getAll("inst_name");
  const key_points = formData.getAll("key_point");
  for (let i = 0; i < cert_names.length; i++) {
    data.certifications.push({
      cert_name: cert_names[i],
      inst_name: inst_names[i],
      key_point: key_points[i],
    });
  }

  // Projects
  const project_names = formData.getAll("project_name");
  const project_roles = formData.getAll("project_role");
  const project_techs = formData.getAll("project_tech");
  const project_descs = formData.getAll("project_desc");
  for (let i = 0; i < project_names.length; i++) {
    data.projects.push({
      project_name: project_names[i],
      project_role: project_roles[i],
      project_tech: project_techs[i],
      project_desc: project_descs[i],
    });
  }

  // Experience
  const job_titles = formData.getAll("job_title");
  const company_names = formData.getAll("company_name");
  const durations = formData.getAll("duration");
  const responsibilities = formData.getAll("responsibilities");
  for (let i = 0; i < job_titles.length; i++) {
    data.experience.push({
      job_title: job_titles[i],
      company_name: company_names[i],
      duration: durations[i],
      responsibilities: responsibilities[i],
    });
  }

  // Education
  const education_types = formData.getAll("education_type");
  const education_groups = formData.getAll("education_group");
  const institutes = formData.getAll("institute");
  const edu_years = formData.getAll("edu_year");

  const eduTypeSelects = document.querySelectorAll(
    "select[name='education_type']"
  );
  const eduGroupSelects = document.querySelectorAll(
    "select[name='education_group']"
  );

  for (let i = 0; i < education_types.length; i++) {
    const education_type_label =
      eduTypeSelects[i]?.selectedOptions[0]?.textContent || "";
    const education_group_label =
      eduGroupSelects[i]?.selectedOptions[0]?.textContent || "";

    data.education.push({
      education_type: education_types[i],
      education_group: education_groups[i],
      education_type_label,
      education_group_label,
      institute: institutes[i],
      edu_year: edu_years[i],
    });
  }

  // Save data and redirect
  localStorage.setItem("resumeData", JSON.stringify(data));
  window.location.href = "/ResumeTemplate/resumeTemplate.html";
});
